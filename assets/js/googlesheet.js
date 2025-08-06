const scriptURL = 'https://script.google.com/macros/s/AKfycbyZkNyeIUE0ObaLBkYARPsC0dA5OSjpMzZLNIhaqbBQE8I1Rre5DdRGc2FMajdKB_JH/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => response.text())
  .then(data => {
    alert("Thank you! Your form has been submitted successfully");
    form.reset();
  })
  .catch(error => {
    console.error('Error!', error.message);
        alert("There was an error submitting the form.");
  });
});
