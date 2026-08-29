// Smooth scroll for in-page nav links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Contact form: opens the visitor's email client with the message pre-filled.
// No backend/server needed, so this works out of the box on GitHub Pages.
// To collect messages directly into an inbox instead, sign up at
// https://formspree.io, replace this handler with a normal form POST to
// your Formspree endpoint, and remove the mailto redirect below.
var CONTACT_EMAIL = 'drubodevpramanik@gmail.com';

var contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('cf-name').value.trim();
    var email = document.getElementById('cf-email').value.trim();
    var subject = document.getElementById('cf-subject').value.trim();
    var message = document.getElementById('cf-message').value.trim();

    var mailSubject = encodeURIComponent(subject || ('Portfolio message from ' + name));
    var mailBody = encodeURIComponent(
      message + '\n\n---\nFrom: ' + name + ' (' + email + ')'
    );

    window.location.href =
      'mailto:' + CONTACT_EMAIL + '?subject=' + mailSubject + '&body=' + mailBody;
  });
}
