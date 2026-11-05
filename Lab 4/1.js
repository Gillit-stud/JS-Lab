function sum(){
  var sum =0; 
  for(var i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;
}
const result = sum(1,2,3,4,5);
console.log(result);

function sum1() {
  var sum = 0;
  for (const value of arguments) {
    sum += value;
  }
  return sum;
}
const result1 = sum1(1, 2, 3);
console.log(result1);

function sum2() {
     var sum = 0;
     while (arguments.length) {
         sum += arguments[0];
         arguments = Array.prototype.slice.call(arguments, 1);
     }
     return sum;
}
const result2 = sum2(1, 2, 3);
console.log(result2);

function sum3() {
  var sum = 0;
  do {
    sum += arguments[0];
    arguments = Array.prototype.slice.call(arguments, 1);
  } while (arguments.length);
  return sum;
}
const result3 = sum3(1, 2, 3);
console.log(result3);

function sum4() {
    var sum = 0;
    array = Array.prototype.reduce.call(arguments, function (acc, value) {
        return acc + value;
    }, 0);
    return array;
}   
const result4 = sum4(1, 2, 3);
console.log(result4);   
