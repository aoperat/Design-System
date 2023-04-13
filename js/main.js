document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        alert('Button clicked: ' + this.textContent);
      });
    });
  });
  