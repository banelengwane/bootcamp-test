var isFromBellville = function(carReg){
  if(typeof carReg === 'string' || carReg instanceof String){
    if(carReg.startsWith('CY')){
      return true;
    }else{
      return false;
    }
  }else {
    return 'not a car registration';
  }
}
