(() => {
  const selector = '.game-card, .gc-card';
  const cards = document.querySelectorAll(selector);
  cards.forEach((card) => {
    const link = card.querySelector('.read-more');
    if (!link || !link.href) return;
    card.setAttribute('role', 'link');
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      link.click();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
})();
