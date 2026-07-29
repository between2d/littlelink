const p5 = window.p5;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// O conteúdo começa visível no celular e também aparece caso alguma API falhe.
const revealNodes = [...document.querySelectorAll('.reveal')];
const showEverything = () => revealNodes.forEach((node) => node.classList.add('visible'));

if (
  reducedMotion ||
  window.innerWidth <= 700 ||
  !('IntersectionObserver' in window)
) {
  showEverything();
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

  revealNodes.forEach((node) => observer.observe(node));
}

window.setTimeout(showEverything, 900);

// Barra fixa de filtros.
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.project-card')];
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');

function setFilter(filter) {
  let visible = 0;

  cards.forEach((card) => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.hidden = !show;
    if (show) visible += 1;
  });

  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  if (resultCount) {
    resultCount.textContent = `${visible} ${visible === 1 ? 'link' : 'links'}`;
  }
  if (emptyState) emptyState.hidden = visible !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter));
});

// Three.js: partículas e anéis discretos ao fundo.
async function startThree() {
  if (reducedMotion) return;

  try {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js');
    const canvas = document.querySelector('#world');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 8;

    const count = window.innerWidth < 700 ? 420 : 1200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorA = new THREE.Color(0xb6a5ff);
    const colorB = new THREE.Color(0xd5ff3f);

    for (let i = 0; i < count; i += 1) {
      const radius = 2.8 + Math.random() * 7;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 1.7;
      positions[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * 1.7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const mixed = colorA.clone().lerp(colorB, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.026,
        transparent: true,
        opacity: 0.58,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
      }),
    );
    scene.add(points);

    const rings = new THREE.Group();
    [2.8, 4.1, 5.4].forEach((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.006 + index * 0.002, 5, 180),
        new THREE.MeshBasicMaterial({
          color: index === 1 ? 0xff5bbd : 0x69e7ff,
          transparent: true,
          opacity: 0.08 + index * 0.025,
        }),
      );
      ring.rotation.x = 0.75 + index * 0.13;
      ring.rotation.y = 0.25 - index * 0.17;
      rings.add(ring);
    });
    scene.add(rings);

    const pointer = { x: 0, y: 0 };
    window.addEventListener('pointermove', (event) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    }, { passive: true });

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const clock = new THREE.Clock();
    function render() {
      const elapsed = clock.getElapsedTime();
      points.rotation.z = elapsed * 0.012;
      points.rotation.y = Math.sin(elapsed * 0.13) * 0.08 + pointer.x * 0.13;
      points.rotation.x += (pointer.y * 0.05 - points.rotation.x) * 0.03;
      rings.rotation.z = elapsed * -0.018;
      rings.rotation.y = Math.sin(elapsed * 0.11) * 0.08;
      camera.position.x += (pointer.x * 0.35 - camera.position.x) * 0.025;
      camera.position.y += (-pointer.y * 0.24 - camera.position.y) * 0.025;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    render();
  } catch (error) {
    console.info('O fundo em Three.js não carregou; o restante do site continua funcionando.', error);
  }
}

startThree();

// p5.js: linhas de sinal sobre a imagem da loja.
if (!reducedMotion && p5) {
  const stage = document.querySelector('#p5-stage');

  if (stage) {
    new p5((p) => {
      let phase = 0;

      p.setup = () => {
        const box = stage.getBoundingClientRect();
        const canvas = p.createCanvas(Math.max(1, box.width), Math.max(1, box.height));
        canvas.parent(stage);
        p.pixelDensity(Math.min(window.devicePixelRatio, 1.5));
        p.noFill();
      };

      p.windowResized = () => {
        const box = stage.getBoundingClientRect();
        p.resizeCanvas(Math.max(1, box.width), Math.max(1, box.height));
      };

      p.draw = () => {
        p.clear();
        phase += 0.008;
        const lines = 17;

        for (let row = 0; row < lines; row += 1) {
          const yBase = p.map(row, 0, lines - 1, p.height * 0.08, p.height * 0.92);
          p.stroke(
            row % 3 === 0 ? 213 : 105,
            row % 3 === 0 ? 255 : 231,
            row % 3 === 0 ? 63 : 255,
            38,
          );
          p.strokeWeight(row % 4 === 0 ? 1.5 : 0.7);
          p.beginShape();

          for (let x = -20; x <= p.width + 20; x += 18) {
            const noise = p.noise(x * 0.004, row * 0.19, phase);
            const wave = Math.sin(x * 0.014 + phase * 16 + row) * 8;
            p.vertex(x, yBase + wave + (noise - 0.5) * 42);
          }

          p.endShape();
        }

        if (p.frameCount % 7 === 0) {
          p.stroke(255, 91, 189, 65);
          const y = p.random(p.height);
          p.line(0, y, p.width, y + p.random(-4, 4));
        }
      };
    }, stage);
  }
}