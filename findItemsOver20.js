function findItemsOver20(objList){
  if(typeof objList === 'object' || name instanceof Object){
    var results = [];
    for (var i = 0; i < objList.length; i++){
      var listItem = objList[i];
      if(listItem.qty > 20){
        results.push(listItem);
      }
    }
    return results;
  }else{
    return "That was not an object";
  }

}
