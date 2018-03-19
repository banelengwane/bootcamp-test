var fromWhere = function(carRegie){
  if (typeof carRegie === 'string' || carRegie instanceof String){
    if (carRegie.startsWith('CY')){
      return 'Bellville';
    } else if(carRegie.startsWith('CJ')){
      return 'Paarl';
    } else if(carRegie.startsWith('CA')){
      return 'Cape Town';
    } else{
      return 'Some other place!';
    }
  }else{
    return 'not a car registration';
  }
}
