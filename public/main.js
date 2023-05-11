let element = document.createElement('p');
let response = axios.get('http://localhost:4000', {
	headers: {
		'Content-Type': 'application/json',
	},
	data: {},
});

response.then((res) => {
	console.log(res.data.name);
	element.textContent = res.data.name;
});
document.body.appendChild(element);
