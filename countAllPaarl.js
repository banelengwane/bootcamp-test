var countAllPaarl = function (regNumbersStr){
  console.log(regNumbersStr);
  var countPaarl = 0;
  var list = regNumbersStr.split(',');

  for (var i = 0; i < list.length; i++){
    if (list[i].trim().startsWith("CJ")){
      countPaarl++;
  	}
  }
   return countPaarl;
}
