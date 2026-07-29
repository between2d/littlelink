const p5 = window.p5;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const spriteUrl = getComputedStyle(document.body).getPropertyValue('--sprite-url').trim();

document.querySelector('#year').textContent = new Date().getFullYear();

// Reveal content as it enters the viewport.
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
} else {
  document.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
}

// Sticky category filter.
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
  resultCount.textContent = `${visible} ${visible === 1 ? 'work' : 'works'}`;
  emptyState.hidden = visible !== 0;
}
filterButtons.forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter)));

// Project detail dialog.
const dialog = document.querySelector('#project-dialog');
const dialogMedia = dialog.querySelector('.dialog-media');
const dialogTitle = dialog.querySelector('h2');
const dialogEyebrow = dialog.querySelector('.dialog-eyebrow');
const dialogDescription = dialog.querySelector('.dialog-description');
const dialogTools = dialog.querySelector('.dialog-tools');
const dialogLink = dialog.querySelector('.dialog-link');
const closeDialog = dialog.querySelector('.dialog-close');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const { title, eyebrow, year, description, tools, url, action, sprite, image } = card.dataset;
    dialogTitle.textContent = title;
    dialogEyebrow.textContent = `${eyebrow} / ${year}`;
    dialogDescription.textContent = description;
    dialogTools.textContent = tools;
    dialogLink.href = url;
    dialogLink.textContent = `${action} ↗`;
    dialogMedia.setAttribute('aria-label', title);
    if (sprite) {
      dialogMedia.style.setProperty('--image-url', spriteUrl);
      dialogMedia.style.setProperty('--image-size', '500% 500%');
      dialogMedia.style.setProperty('--sprite-position', sprite);
    } else {
      dialogMedia.style.setProperty('--image-url', `url("${image}")`);
      dialogMedia.style.setProperty('--image-size', 'cover');
      dialogMedia.style.setProperty('--sprite-position', 'center');
    }
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});

function shutDialog() {
  dialog.close();
  document.body.style.overflow = '';
}
closeDialog.addEventListener('click', shutDialog);
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) shutDialog();
});
dialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  shutDialog();
});

// Three.js: slow constellation and signal rings behind the page.
async function startThree() {
  if (reducedMotion) return;
  try {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js');
    const canvas = document.querySelector('#world');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 8;

  const count = window.innerWidth < 700 ? 520 : 1200;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorA = new THREE.Color(0xb6a5ff);
  const colorB = new THREE.Color(0xd5ff3f);
  for (let i = 0; i < count; i += 1) {
    const radius = 2.8 + Math.random() * 7;
    const angle = Math.random() * Math.PI * 2;
    positions[i * 3] = Math.cos(angle) * radius + (Math.random() - .5) * 1.7;
    positions[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - .5) * 1.7;
    positions[i * 3 + 2] = (Math.random() - .5) * 12;
    const mixed = colorA.clone().lerp(colorB, Math.random());
    colors[i * 3] = mixed.r; colors[i * 3 + 1] = mixed.g; colors[i * 3 + 2] = mixed.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({ size: .026, transparent: true, opacity: .58, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true }));
  scene.add(points);

  const rings = new THREE.Group();
  [2.8, 4.1, 5.4].forEach((radius, index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, .006 + index * .002, 5, 180),
      new THREE.MeshBasicMaterial({ color: index === 1 ? 0xff5bbd : 0x69e7ff, transparent: true, opacity: .08 + index * .025 })
    );
    ring.rotation.x = .75 + index * .13;
    ring.rotation.y = .25 - index * .17;
    rings.add(ring);
  });
  scene.add(rings);

  const pointer = { x: 0, y: 0 };
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX / window.innerWidth - .5;
    pointer.y = event.clientY / window.innerHeight - .5;
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
    const t = clock.getElapsedTime();
    points.rotation.z = t * .012;
    points.rotation.y = Math.sin(t * .13) * .08 + pointer.x * .13;
    points.rotation.x += (pointer.y * .05 - points.rotation.x) * .03;
    rings.rotation.z = t * -.018;
    rings.rotation.y = Math.sin(t * .11) * .08;
    camera.position.x += (pointer.x * .35 - camera.position.x) * .025;
    camera.position.y += (-pointer.y * .24 - camera.position.y) * .025;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
    render();
  } catch (error) {
    console.info('Three.js background unavailable; the static design remains active.', error);
  }
}
startThree();

// p5.js: a transparent VHS/signal field over the store image.
if (!reducedMotion && p5) {
  const stage = document.querySelector('#p5-stage');
  if (stage) {
    new p5((p) => {
      let phase = 0;
      p.setup = () => {
        const box = stage.getBoundingClientRect();
        const cnv = p.createCanvas(Math.max(1, box.width), Math.max(1, box.height));
        cnv.parent(stage);
        p.pixelDensity(Math.min(window.devicePixelRatio, 1.5));
        p.noFill();
      };
      p.windowResized = () => {
        const box = stage.getBoundingClientRect();
        p.resizeCanvas(Math.max(1, box.width), Math.max(1, box.height));
      };
      p.draw = () => {
        p.clear();
        phase += .008;
        const lines = 17;
        for (let row = 0; row < lines; row += 1) {
          const yBase = p.map(row, 0, lines - 1, p.height * .08, p.height * .92);
          p.stroke(row % 3 === 0 ? 213 : 105, row % 3 === 0 ? 255 : 231, row % 3 === 0 ? 63 : 255, 38);
          p.strokeWeight(row % 4 === 0 ? 1.5 : .7);
          p.beginShape();
          for (let x = -20; x <= p.width + 20; x += 18) {
            const n = p.noise(x * .004, row * .19, phase);
            const wave = Math.sin(x * .014 + phase * 16 + row) * 8;
            p.vertex(x, yBase + wave + (n - .5) * 42);
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
