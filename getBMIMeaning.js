const { template } = require('@babel/core')

function calculateBMI(weight, height) {
    return weight/(height*height);
}
function getBMIMeaning(weight, height) {
  let x=calculateBMI(weight,height)
    if(x<18.5){
      return "Underweight";
    }else if(x>25.0){
      return "Overweight";
    }else{
      return "Normal weight";
    }
}

module.exports = getBMIMeaning
