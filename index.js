const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const video = document.getElementById('video');

  // Defina o tamanho do canvas igual ao tamanho do vídeo quando ele estiver carregado
  video.addEventListener('loadedmetadata', function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  });

  // Desenhe o vídeo no canvas
  video.addEventListener('play', function() {
    const $this = this; // Cache para referência interna
    (function loop() {
      if (!$this.paused && !$this.ended) {
        ctx.drawImage($this, 0, 0);
        setTimeout(loop, 1000 / 30); // Desenhe a 30 quadros por segundo
      }
    })();
  }, 0);

  // JavaScript para controlar o carrossel
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');

  let currentItem = 0;

  function rotateCarousel() {
      currentItem = (currentItem + 1) % items.length;
      const translateX = -currentItem * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
  }

  setInterval(rotateCarousel, 5000); // Altere o intervalo conforme desejado