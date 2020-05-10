var arrayNum = [1, 2, 3, 4]
const fetch = require("node-fetch");




function restornaNumero(x) {
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((responseData) => {
			return responseData;
		})
		.catch(error => console.warn(error));
}

async function pegarArray() {
	var retorno;
	try {
		retorno = await restornaNumero(5)
	} catch (error) {
		console.log(error)
	}
	console.log(retorno)
}

function adicionarNumero(x) {
	arrayNum.push(x);
	return arrayNum;
}

pegarArray()