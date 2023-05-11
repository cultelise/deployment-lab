let element = document.createElement('p');
let request = axios.get('http://172.31.36.217/pets');

request.then((res) => {
	console.log(res);
	element.textContent = res.data;
});
document.body.appendChild(element);
