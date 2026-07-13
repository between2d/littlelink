document.querySelector("#year").textContent = new Date().getFullYear();

const timeNode = document.querySelector("#signal-time");
function updateClock() {
  timeNode.textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Recife",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
}
updateClock();
setInterval(updateClock, 1000);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-2px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

async function startWorld() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  try {
    const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js");
    const canvas = document.querySelector("#world");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.z = 7;

    const geometry = new THREE.BufferGeometry();
    const count = window.innerWidth < 620 ? 480 : 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 5.8;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 1.4;
      positions[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * 1.4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const points = new THREE.Points(geometry, new THREE.PointsMaterial({
      color: 0xb6a5ff,
      size: 0.024,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    scene.add(points);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.008, 6, 220),
      new THREE.MeshBasicMaterial({ color: 0xd5ff3f, transparent: true, opacity: 0.22 })
    );
    ring.rotation.x = 0.9;
    ring.rotation.y = 0.35;
    scene.add(ring);

    const pointer = { x: 0, y: 0 };
    window.addEventListener("pointermove", (event) => {
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
    window.addEventListener("resize", resize, { passive: true });

    const clock = new THREE.Clock();
    function render() {
      const t = clock.getElapsedTime();
      points.rotation.z = t * 0.018;
      points.rotation.y = Math.sin(t * 0.12) * 0.08 + pointer.x * 0.12;
      points.rotation.x = pointer.y * 0.06;
      ring.rotation.z = t * -0.035;
      camera.position.x += (pointer.x * 0.32 - camera.position.x) * 0.025;
      camera.position.y += (-pointer.y * 0.22 - camera.position.y) * 0.025;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    render();
  } catch (error) {
    console.info("3D background unavailable; static design remains active.", error);
  }
}

startWorld();