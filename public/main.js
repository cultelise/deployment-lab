let element = document.createElement('p');
let response = axios.get('http://localhost:3000');

response.then((res) => (element.textContent = res.data));
document.body.appendChild(element);
