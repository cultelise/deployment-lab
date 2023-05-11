let element = document.createElement('p');
let request = axios.get('/pets');

request.then((res) => {
	console.log(res);
	element.textContent = res.data;
});
document.body.appendChild(element);
