const cards = document.querySelectorAll('.cookie-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animira se samo jednom
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});
document.querySelectorAll('.cookie-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const img = card.querySelector('img');
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width/2) / 20;
    const y = (e.clientY - rect.top - rect.height/2) / 20;
    img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    const img = card.querySelector('img');
    img.style.transform = `translate(0, 0) scale(1)`;
  });
});
