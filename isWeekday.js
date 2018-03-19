var isWeekday = function (day){
  var weekend = day.startsWith('M', 'T', 'W', 'F'); //here use multiple choices to choose from
  return weekend; // return the decision
}
