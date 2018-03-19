var isWeekday = function (day){
  if(typeof day === 'string' || day instanceof String){
    if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' ){
      return true;
    }else{
      return false;
    }
  } else {
    return 'invalid day';
  }
  /*
  var weekend = day.startsWith('M', 'T', 'W', 'F'); //here use multiple choices to choose from
  return weekend; // return the decision*/
}
