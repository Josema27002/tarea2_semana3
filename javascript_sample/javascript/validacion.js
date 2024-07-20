

function emailValidation() {
  const form = document.getElementById('form');
  const emailConfirmField = document.getElementById('email_confirm');
  const alertRow = document.getElementById('alert_row');
  const alertElement = document.getElementById('alert');
  
  emailConfirmField.addEventListener('input', e => {
    if (form.email.value !== form.email_confirm.value) {
      alertRow.style.display = 'table-row';
      emailConfirmField.classList.add("alert_bg");
    } else {
      alertRow.style.display = 'none';
      emailConfirmField.classList.remove("alert_bg");
    }
  });
}

window.onload = function() {
  emailValidation();
};
