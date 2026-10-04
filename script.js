const heartField = document.querySelector('.hearts');
const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (!reduceMotion && heartField) {
  const colors = ['#f4b4bc', '#ffd9d8', '#e895a7'];

  function addFloatingHeart() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '♥';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty('--size', `${20 + Math.random() * 18}px`);
    heart.style.setProperty('--duration', `${8 + Math.random() * 6}s`);
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    heartField.append(heart);
    heart.addEventListener(
      'animationend',
      () => heart.remove(),
      { once: true }
    );
  }

  window.setInterval(addFloatingHeart, 520);
}