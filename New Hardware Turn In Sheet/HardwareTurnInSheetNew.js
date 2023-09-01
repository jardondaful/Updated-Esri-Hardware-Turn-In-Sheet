document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      const gender = form.querySelector('#gender').value;
  
      console.log('Form Data:', { name, email, gender });
    });
  });
  