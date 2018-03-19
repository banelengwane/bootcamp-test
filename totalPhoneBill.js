var totalPhoneBill = function(billing){
  if(typeof billing === 'string' || billing instanceof String){
    var biList = billing.split(',');
    var callCost = 0;
    var smsCost = 0;

    for(var i = 0; i < biList.length; i++){
      switch(biList[i].trim()){
        case 'call':
          callCost += 2.75;
          break;
        case 'sms':
          smsCost += 0.65;
          break;
      }
    }
    var totalCost = callCost + smsCost;
    return "R"+totalCost.toFixed(2);
  }else{
    return 'billing error';
  }
}
