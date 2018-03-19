var countAllFromTown = function (regNumbersStr, prefix){
  var count = 0;
  var list = regNumbersStr.split(',');

  for (var i = 0; i < list.length; i++){
    if (list[i].trim().startsWith(prefix)){
      count++;
  	}
  }
   return count;
}
