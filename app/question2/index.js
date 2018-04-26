// Nao alterar a assinatura desse metodo!
const compareVersion = (version1, version2) => {
  // TODO sua implementacao! Fique a vontade para alterar abaixo e passar nos testes
  let a = version1.split('.');
  let b = version2.split('.');
  let retorno = 0;

  if(a.length >= b.length){
    for(let i = 0; i < a.length; i++){
      if( i < b.length){
        if(parseInt(a[i]) > parseInt(b[i])) return 1;
        if(parseInt(a[i]) < parseInt(b[i])) return -1;
      }else{
        if(parseInt(a[i]) > 0) return 1;
      }
    }
  }else if( a.length < b.length){
    for(let i = 0; i < b.length; i++){
      if( i < a.length){
        if(parseInt(a[i]) > parseInt(b[i])) return 1;
        if(parseInt(a[i]) < parseInt(b[i])) return -1;
      }else{
        if(parseInt(b[i]) > 0) return 1;
      }
    }
  }

  console.log(version1, version2);
  return retorno;
};


module.exports = {
  compareVersion,
};
