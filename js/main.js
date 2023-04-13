document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log('Button clicked: ' + this.textContent);
        });
    });
});

// Modals
const openModalButton = document.getElementById('openModal');
const closeModalButtons = document.querySelectorAll('#closeModal, #closeModalFooter');
const modal = document.getElementById('myModal');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
