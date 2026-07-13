const PROFILE = {
  socials: [
    { name: "Instagram", detail: "visuals, music and works in progress", url: "https://www.instagram.com/riegulate/", accent: "#ff5bbd" },
    { name: "WhatsApp", detail: "+55 83 98878-8180", url: "https://wa.me/5583988788180", accent: "#70ff9a" },
    { name: "YouTube", detail: "video art, music and experiments", url: "https://www.youtube.com/@riegulate6276", accent: "#ff665f" },
    { name: "Portfolios", detail: "audiovisual, music, games and other work", url: "https://drive.google.com/drive/folders/16f2IcNY23wUPKQ-ZHk98uUYwPh3zl5_m", accent: "#d5ff3f" },
    { name: "AI Portfolio", detail: "generative image, video and creative AI", url: "https://drive.google.com/drive/folders/143-8lbYNNywVk7VK5xvC2e5CTmzBXVOk", accent: "#b6a5ff" },
    { name: "Behance", detail: "selected visual and audiovisual projects", url: "https://www.behance.net/between2d", accent: "#66b7ff" },
    { name: "Spotify", detail: "original music by Riegulate", url: "https://open.spotify.com/artist/4Dfa9mVsHeAwyVZfLgiAt8", accent: "#70ff9a" },
    { name: "SoundCloud", detail: "tracks, sketches and older releases", url: "https://soundcloud.com/riegulate", accent: "#ff9a4d" },
    { name: "LinkedIn", detail: "professional work and experience", url: "https://www.linkedin.com/in/riegulate/", accent: "#66b7ff" },
    { name: "Facebook", detail: "updates and older posts", url: "https://www.facebook.com/riegulate", accent: "#9e7bff" }
  ],
  works: [
    { title: "Cadê Zé", type: "MUSIC VIDEO / YOUTUBE", code: "TX-01", url: "https://www.youtube.com/watch?v=_rUUCNYITLQ" },
    { title: "Tudo Mentira", type: "MUSIC VIDEO / YOUTUBE", code: "TX-02", url: "https://www.youtube.com/watch?v=Jiyq40Uqqbg" },
    { title: "Jardins Fragmentados", type: "VIDEO WORK / YOUTUBE", code: "TX-03", url: "https://youtu.be/cYnLtgwx-Z0" },
    { title: "Riegulate on Spotify", type: "MUSIC / DISCOGRAPHY", code: "TX-04", url: "https://open.spotify.com/artist/4Dfa9mVsHeAwyVZfLgiAt8" }
  ]
};

const socialRoot = document.querySelector("#social-links");
const socialTemplate = document.querySelector("#social-template");

PROFILE.socials.forEach((item, index) => {
  const node = socialTemplate.content.firstElementChild.cloneNode(true);
  node.style.setProperty("--card-accent", item.accent);
  node.querySelector(".link-index").textContent = String(index + 1).padStart(2, "0");
  node.querySelector("strong").textContent = item.name;
  node.querySelector("small").textContent = item.detail;

  if (item.enabled === false || !item.url) {
    node.removeAttribute("target");
    node.removeAttribute("rel");
    node.removeAttribute("href");
    node.setAttribute("aria-disabled", "true");
    node.classList.add("is-disabled");
  } else {
    node.href = item.url;
  }

  socialRoot.append(node);
});

const workRoot = document.querySelector("#work-links");
const workTemplate = document.querySelector("#work-template");

PROFILE.works.forEach((item) => {
  const node = workTemplate.content.firstElementChild.cloneNode(true);
  node.href = item.url;
  node.querySelector(".work-code").textContent = item.code;
  node.querySelector(".work-type").textContent = item.type;
  node.querySelector("h3").textContent = item.title;
  workRoot.append(node);
});

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
      if (card.classList.contains("is-disabled")) return;
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
    const material = new THREE.PointsMaterial({
      color: 0xb6a5ff,
      size: 0.024,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
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