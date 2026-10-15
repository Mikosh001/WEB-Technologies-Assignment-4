const form = document.querySelector('.validation-form');
const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
const statusMessage = document.querySelector('#form-status');

function validateField(field) {
  field.setCustomValidity('');

  if (field.type !== 'radio' && field.type !== 'password' && !field.value.trim()) {
    field.setCustomValidity('This field cannot contain only spaces.');
  }

  if (field.id === 'confirm-password') {
    const password = form.querySelector('#password');
    if (field.value && field.value !== password.value) {
      field.setCustomValidity('Passwords must match.');
    }
  }

  const valid = field.checkValidity();
  field.classList.toggle('is-valid', valid);
  field.classList.toggle('is-invalid', !valid);
  field.setAttribute('aria-invalid', String(!valid));

  const isRadio = field.type === 'radio';
  const feedback = document.getElementById(isRadio ? 'gender-error' : field.id + '-error');

  if (isRadio) {
    const group = field.closest('fieldset');
    group.classList.toggle('is-valid', valid);
    group.classList.toggle('is-invalid', !valid);
    group.setAttribute('aria-invalid', String(!valid));
  }

  if (!valid && feedback) {
    if (field.validity.valueMissing) {
      const label = isRadio ? 'Gender' : field.labels[0].textContent;
      feedback.textContent = label + ' is required.';
    } else if (field.validity.customError) {
      feedback.textContent = field.validationMessage;
    } else {
      feedback.textContent = field.dataset.error;
    }
  }
}

fields.forEach((field) => {
  field.addEventListener('input', () => {
    statusMessage.hidden = true;

    if (field.type === 'radio') {
      form.querySelectorAll('input[name="gender"]').forEach(validateField);
    } else {
      validateField(field);
    }

    if (field.id === 'password') {
      const confirmation = form.querySelector('#confirm-password');
      if (confirmation.value || confirmation.classList.contains('is-invalid')) {
        validateField(confirmation);
      }
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  fields.forEach(validateField);

  if (!form.checkValidity()) {
    statusMessage.hidden = true;
    form.querySelector('input:invalid, select:invalid, textarea:invalid').focus();
    return;
  }

  statusMessage.hidden = false;
});

form.addEventListener('reset', () => {
  fields.forEach((field) => {
    field.setCustomValidity('');
    field.classList.remove('is-valid', 'is-invalid');
    field.removeAttribute('aria-invalid');
  });

  const genderGroup = form.querySelector('#gender-group');
  if (genderGroup) {
    genderGroup.classList.remove('is-valid', 'is-invalid');
    genderGroup.removeAttribute('aria-invalid');
  }

  statusMessage.hidden = true;
});

