document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('fname');

  inputField.addEventListener('blur', () => {
    // Convert the input field content to uppercase
    inputField.value = inputField.value.toUpperCase();
  });
});
