let element = document.createElement('p');
let response = axios.get('http://localhost:4000/pets');

response.then((res) => {
	console.log(res);
	element.textContent = res.data;
});
document.body.appendChild(element);
