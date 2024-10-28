// script.js
const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#FF8B94'];

function createConfetti() {
  const confettiCount = 30; // Reduced for better performance
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(confetti);

    // Reuse instead of remove
    setTimeout(() => {
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
    }, 4000);
  }
}

document.getElementById('celebrateBtn').addEventListener('click', createConfetti);

// Initial confetti burst
createConfetti();
