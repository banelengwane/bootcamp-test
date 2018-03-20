var countRegNumber = function (myStr){
  if(typeof myStr === 'string' || myStr instanceof String){
    var theSplit = myStr.split(","); // splitting myStr
    var len = theSplit.length; //counting the number of strings after the split
    return len; //returning the total number of registrations
  }else {
    return 'The registrations are invalid'
  }
}
