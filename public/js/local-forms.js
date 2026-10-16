/* Local demo behavior. Submissions stay in this browser and are never emailed. */
(function () {
  'use strict';
  document.querySelectorAll('#contactForm, #appointmentForm, #newslettersForm').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!form.reportValidity()) return;
      var feedback = form.querySelector('#msgSubmit, .local-form-status');
      if (!feedback) {
        feedback = document.createElement('p');
        feedback.className = 'local-form-status';
        feedback.style.cssText = 'margin-top:16px;line-height:1.6;color:inherit;';
        form.appendChild(feedback);
      }
      feedback.setAttribute('role', 'status');
      feedback.setAttribute('aria-live', 'polite');
      try {
        var key = 'lifeon-demo-' + form.id;
        var submissions = JSON.parse(localStorage.getItem(key) || '[]');
        submissions.push({ savedAt: new Date().toISOString(), fields: Object.fromEntries(new FormData(form)) });
        localStorage.setItem(key, JSON.stringify(submissions));
        feedback.classList.remove('hidden', 'text-danger');
        feedback.textContent = 'Demo: your details have been saved in this browser. No email has been sent.';
        form.reset();
        if (window.jQuery) window.jQuery(form).validator('update');
      } catch (error) {
        feedback.textContent = 'Your browser could not save these details. Please enable browser storage and try again.';
      }
    }, true);
  });
  document.querySelectorAll('.newsletter-btn').forEach(function (button) {
    button.setAttribute('aria-label', 'Subscribe to the newsletter');
  });
  document.querySelectorAll('input, select, textarea').forEach(function (field) {
    if (!field.labels || !field.labels.length) {
      field.setAttribute('aria-label', field.getAttribute('placeholder') || field.name.replaceAll('_', ' '));
    }
  });
  document.querySelectorAll('.slicknav_btn').forEach(function (button) {
    button.setAttribute('aria-label', 'Toggle navigation');
  });
})();
