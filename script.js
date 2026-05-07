(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        showToast();
        form.reset();
        form.classList.remove('was-validated');
      }

      form.classList.add('was-validated');

    }, false);
  });

  function showToast() {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerText = "Report submitted successfully!";
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.remove(), 3000);
  }

})();