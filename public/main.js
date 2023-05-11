let element = document.createElement('p');
let response = axios.get('http://localhost:4000', {
	headers: {
		'Content-Type': 'application/json',
	},
});

response.then((res) => (element.textContent = res.data));
document.body.appendChild(element);
