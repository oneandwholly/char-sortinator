let formEl = document.getElementById('form');

formEl.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let headers = new Headers();
  
    headers.set('Accept', 'application/json');

    let formData = new FormData();
    formData.append(formEl[0].name, formEl[0].value);

    let response = fetch('/save', {
        method: 'POST',
        headers,
        body: formData
    });
    
    response
        .then((resp) => {
            return resp.json();
        })
        .then(sortedStr => {
            let table = document.getElementById("table");
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell1.innerHTML = formEl[0].value;
            cell2.innerHTML = sortedStr;
        })
});

