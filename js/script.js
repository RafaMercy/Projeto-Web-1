
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});

const lightbox = document.getElementById('lightbox');


if (lightbox) {
  

  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');

  function openLightbox(src) {
      lightbox.style.display = 'flex';
      lightboxImg.src = src;
      document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      document.body.style.overflow = '';
  }

  document.querySelectorAll('.galeria-item img').forEach(img => {
      img.addEventListener('click', function() {
          openLightbox(this.src);
      });
  });

  if(closeBtn) { 
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
          closeLightbox();
      }
  });

  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
          closeLightbox();
      }
  });

}
