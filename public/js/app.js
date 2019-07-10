
const p1 = document.querySelector('#message-1');
const p2 = document.querySelector('#message-2');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const location = e.target.elements[0].value;
    p2.textContent = '';
    p1.textContent = 'Loading';

    fetch(`/weather?address=${location}`)
    .then(response => {
        return response.json();
    })
    .then(json => {
        if(json.error){
            p1.textContent = json.error;
            return ;
        }

        p1.textContent = json.location;
        p2.textContent = json.forecast;
    })
    .catch( error => {
        alert(error);
    });
});