/* function isJS(caminho) {

    var retorno = caminho.includes('.js') || caminho.includes('.jsx');
} */

const isJS = caminho => {
    return caminho.includes('.js') || caminho.includes('.jsx');
}

isJS("/users/user.jsx");