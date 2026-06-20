// Lightweight, framework-free contact form handler.
// Since this is a static site, we validate input and show a confirmation
// message instead of actually sending anything to a server.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var status = document.getElementById('form-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = form.elements['name'].value.trim();

    form.reset();
    status.textContent =
      'Thanks' + (name ? ', ' + name : '') + '! Your message has been received. We’ll be in touch soon.';
    status.classList.add('show');
  });
});
