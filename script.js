document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox__close');

  // Selecionar as imagens 
  const images = document.querySelectorAll('.gallery__img, .marquee__img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  // Fechar lightbox ao clicar 
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Fechar lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});