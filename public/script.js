let formEl = document.getElementById('form');

formEl.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let headers = new Headers();
  
    headers.set('Accept', 'application/json');

    let formData = new FormData();
    formData.append(formEl[0].name, formEl[0].value);
    
    let response = fetch('/submit', {
        method: 'POST',
        headers,
        body: formData
    });
    
    response
        .then((resp) => {
            console.log(resp);
        })
});

