// Nao alterar a assinatura desse metodo!
const compareVersion = (version1, version2) => {
  // TODO sua implementacao! Fique a vontade para alterar abaixo e passar nos testes
  var a = version1.split(".");
  var b = version1.split(".");
  var retorno = 0;
  
  if(a.length >= b.length){
    for(var i = 0; i < b.length; i++){

      if(a[i] > b[i]) return 1;
      if(a[i] < b[i]) return -1;
    }
  }else{
    for(var j = 0; j < a.length; j++){

      if(a[j] > b[j]) return 1;
      if(a[j] < b[j]) return -1;
    }
  }
  
  console.log(version1, version2);
  return retorno;
};


module.exports = {
  compareVersion,
};
