function findItemsOver(objList, threshold){
  if(typeof objList === 'object' || objList instanceof Object){
    if(typeof threshold === 'number' || threshold instanceof Number){
      var results = [];
      for (var i = 0; i < objList.length; i++){
        var listItem = objList[i];
        if(listItem.qty > threshold){
          results.push(listItem);
        }
      }
      return results;
    }else{
        return 'invalid threshold'
    }
  }else{
    return 'That was not an object';
  }
}
