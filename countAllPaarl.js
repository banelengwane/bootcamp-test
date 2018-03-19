var countAllPaarl = function (regNumbersStr){
  if(typeof regNumbersStr === 'string' || regNumbersStr instanceof String){
    var countPaarl = 0;
    var list = regNumbersStr.split(',');

    for (var i = 0; i < list.length; i++){
      if (list[i].trim().startsWith("CJ")){
        countPaarl++;
      }
    }

    if(countPaarl == 0){
      return 'No car registration from Paarl';
    }else {
      return countPaarl;
    }
  } else{
    return 'car registration is invalid';
  }

}
