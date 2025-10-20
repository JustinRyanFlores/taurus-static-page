/* ---------- Simple reveal on load + Intersection for animations ---------- */
function revealNow() { document.querySelectorAll('.reveal').forEach((el, i) => { setTimeout(() => el.classList.add('show'), 120 * i) }) }
window.addEventListener('load', () => {
    revealNow();
});

// Smooth scroll for nav anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const heroArt = document.getElementById('heroArt');
const heroCard = document.getElementById('heroCard');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;
    if (heroArt) heroArt.style.transform = `translate(${x}px,${y}px) rotate(${x * 0.02}deg)`;
    if (heroCard) heroCard.style.transform = `translate(${x * -0.4}px,${y * -0.4}px)`;
});

function copyCA() {
  const caText = document.getElementById("contractAddress").innerText;
  navigator.clipboard.writeText(caText);
  const btn = document.querySelector(".copy-btn");
  btn.innerText = "Copied!";
  setTimeout(() => (btn.innerText = "Copy Contract"), 1500);
}

// Parallax scroll for Taurus image
window.addEventListener("scroll", () => {
  const taurus = document.querySelector(".taurus-parallax");
  if (taurus) {
    const scrollY = window.scrollY;
    taurus.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.3}px))`;
  }
});

// Powerful fade-in/fade-out scroll animation
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.25 }); // Trigger when 25% visible

revealElements.forEach(el => observer.observe(el));
