let element = document.createElement('p');
let response = axios.get('http://localhost:4000', {
	headers: {
		'Content-Type': 'text/html',
	},
	data: {},
});

response.then((res) => {
	console.log(res);
	element.textContent = res.data;
});
document.body.appendChild(element);
