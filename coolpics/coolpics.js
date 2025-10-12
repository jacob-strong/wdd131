const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', expanded);
  });
}

// Modal logic
const gallery = document.querySelector('#gallery');
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-img');
const modalClose = document.querySelector('#modal-close');

function openModal(src, alt = '') {
  modalImg.src = src;
  modalImg.alt = alt;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  document.body.style.overflow = '';
}

if (gallery) {
  gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    openModal(img.src, img.alt);
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});