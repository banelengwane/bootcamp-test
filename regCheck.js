var regCheck = function (carReg, prefix){
  if (typeof carReg === 'string' && typeof prefix === 'string'){
    if(carReg.endsWith(prefix)){
      return true;
    }else{
      return false;
    }
  }else{
    return 'carReg / prefix is not a string'
  }
}
