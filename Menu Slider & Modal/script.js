const toggle = document.getElementById('toggle');
const closeModal = document.getElementById('close');
const openModal = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// Show Modal
openModal.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide Modal
closeModal.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', (e) => e.target == modal ? modal.classList.remove('show-modal') : false)