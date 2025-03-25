document.getElementById('prank-button').addEventListener('click', () => {
    const audio = document.getElementById('ketchupprank');
    audio.currentTime = 0;
    audio.play();
    explodeKetchup();
  });
  
  function explodeKetchup() {
    for (let i = 0; i < 30; i++) {
      let drop = document.createElement('div');
      drop.className = 'ketchup';
      drop.style.left = `${window.innerWidth / 2}px`;
      drop.style.top = `${window.innerHeight / 2}px`;
  
      document.body.appendChild(drop);
  
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 300 + 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
  
      drop.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${x}px, ${y}px)` }
      ], {
        duration: 1000,
        easing: 'ease-out'
      });
  
      setTimeout(() => drop.remove(), 1100);
    }
  }
  