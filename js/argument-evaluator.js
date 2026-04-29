const form = document.querySelector('.notify-form');
const confirmMsg = document.getElementById('notify-confirm');

form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('notify-email').value = '';
  confirmMsg.hidden = false;
});
