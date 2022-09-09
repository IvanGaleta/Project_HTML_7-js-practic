
// ----------Exercise1-------------//
const isAdult = function (userAge){
  if(userAge >= 18){    
    return true;    
  } else{ 
    return false;    
  }   
};
console.log(isAdult(12));
// ----------Exercise-------------//
const checkMultiplicity = function (num1, num2 ){
  if (num1 % num2 === 0){
    return true;
  }else{
    return false;
  }
}
console.log(checkMultiplicity(25,5));
// ----------Exercise3-------------//
const triangle = function(num1, num2, num3){
  if(num1 < num2 + num3 && num2 < num1 + num3 && num3 < num2 + num1) {
    return true;
  }else{
    return false;
  }
}
console.log(triangle(30,30,30));

// ----------Exercise4-------------//
const oddSum = function (num){
  result = 0;
  for( let i=0; i<num; i++ ){
    if( i % 2 !== 0 ){
      result = result +=i;      
    }
  }
    return result;
}
console.log(oddSum(30));
// ----------Exercise5-------------//
