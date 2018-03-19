var transportFee = function(theShift){
  if (typeof theShift === 'string' || theShift instanceof String){
    var shift = theShift.toLowerCase();
    switch(shift){
        case "morning":
          return "R20";
          break; // if a shift is a morning then the price is returned and the proram ends here
        case "afternoon":
          return 'R10';
          break; // else if a shift is the afternoon, then the price to be returned is R10, then the program ends here
        case "nightshift":
          return "free";
          break;// else if shift is the nightshift, then 'free' is returned, and the program ends here
        default:
          return "not a shift"; // for any other text entered, this option is selected

  	}
  }else{
    return "not a shift"
  }
}
