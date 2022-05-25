const repeatString = function(string,num) {
  if (num<0) return "ERROR";
  multipliedString=''
  for(i=0;i<num;i++) {
    multipliedString += string;
  }
  return(multipliedString);
};

// Do not edit below this line
module.exports = repeatString;