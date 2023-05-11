let element = document.createElement('p');
let request = axios.get('http://18.219.145.88/pets');

request.then((res) => {
	console.log(res);
	element.textContent = res.data;
});
document.body.appendChild(element);
