let element = document.createElement('p');
let request = axios.get('http://localhost:4000/pets');

request.then((res) => {
	console.log(res);
	element.textContent = res.data;
});
document.body.appendChild(element);
