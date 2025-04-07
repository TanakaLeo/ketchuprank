document.getElementById('prank-button').addEventListener('click', () => {
    const button = document.getElementById('prank-button')
    const audio = document.getElementById('ketchupprank');
    button.style.display = 'none';
    audio.currentTime = 0;
    audio.play();
    explodeKetchup();
    showKetchupSplash();
    setTimeout(() => {
      showGasterBlaster();
    }, 24000);
    setTimeout(() => {
      resetPrank();
    }, 25000);
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
  function showKetchupSplash() {
    const splash = document.createElement('img')
    splash.src = 'assets/img/ketchup.png';
    splash.id = 'splash-ketchup';
    splash.style.position = 'fixed';
    splash.style.left = '50%';
    splash.style.top = '50%';
    splash.style.transform = 'translate(-50%, -50%)';
    splash.style.width = '700px';
    splash.style.pointerEvents = 'none';
    splash.style.zIndex = '20';
  
    document.body.appendChild(splash);
  }
  function showGasterBlaster() {
    const gaster = document.createElement('img');
    gaster.src = 'assets/img/gasterblaster.png';
    gaster.id = 'gasterblaster';
    gaster.style.position = 'fixed';
    gaster.style.left = '50%';
    gaster.style.top = '50%';
    gaster.style.transform = 'translate(-50%, -50%)';
    gaster.style.width = '100vw';
    gaster.style.height = '100vh';
    gaster.style.objectFit = 'cover';
    gaster.style.zIndex = '999';
    gaster.style.pointerEvents = 'none';
    gaster.style.backgroundColor = 'black';
  
    document.body.appendChild(gaster);
  }
  
  function resetPrank() {
    document.querySelectorAll('.ketchup, #splash-ketchup, #gasterblaster').forEach(el => el.remove());
    const button = document.getElementById('prank-button');
    button.style.display = 'block';
  }