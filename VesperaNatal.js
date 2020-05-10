var data = new Date(2011, 11, 24);


function isVesperadaNAtal(data) {
    var dataTime = data.getDate();
    var mes = data.getMonth();

    var retorno = dataTime === 24 && mes === 11;
    console.log(retorno);
    /*  if (dataTime === 24 && mes === 11) {
         return true
     } else {
         return false;
     } */
}

isVesperadaNAtal(data);