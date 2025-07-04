const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const reloadBtn = document.getElementById('reloadBtn');
const popup = document.getElementById('popup');

openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

reloadBtn.addEventListener('click', () => {
  location.reload();
});
