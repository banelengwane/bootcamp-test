var regCheck = function (carReg, prefix){
  if (typeof carReg === 'string' || typeof carReg === 'string'){
    if (typeof prefix === 'string' || typeof prefix === 'string'){
      if(carReg.endsWith(prefix)){
        return true;
      }else{
        return false;
      }
    }else {
      return 'the prefix is invalid'
    }

  }else{
    return 'the car registrations is / are invalid';
  }
}
