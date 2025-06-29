  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset(); 
        successMessage.classList.remove('d-none'); 
      } else {
        alert('حدث خطأ أثناء الإرسال، حاول مرة أخرى.');
      }
    }).catch(error => {
      alert('خطأ في الاتصال بالخادم.');
    });
  });
