var countAllFromTown = function (regNumbersStr, prefix){
  if(typeof regNumbersStr === 'string' || regNumbersStr instanceof String){
    if(typeof prefix === 'string' || prefix instanceof String){
      var count = 0;
      var list = regNumbersStr.split(',');

      for (var i = 0; i < list.length; i++){
        if (list[i].trim().startsWith(prefix)){
          count++;
        }
      }
       return count;
    }else {
      return 'prefix is invalid';
    }
  }else{
    return 'registration numbers are invalid';
  }
}
