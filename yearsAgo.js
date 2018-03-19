var yearsAgo = function(myYear){
  if(typeof myYear === 'number' || myYear instanceof Number){
    if(myYear > 0){
      const date = new Date(); // date stores the current date
      var year = date.getFullYear() //year stores the current year from date
      var diff = year - myYear; // diff stores the difference between the two numbers

      return diff // return the difference
    }else {
      return 'invalid year';
    }
  } else {
    return 'invalid year';
  }

}
