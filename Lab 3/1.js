const random = (min, max) => {
   if(max === undefined) {  
    max = min;
    min = 0;     
   }
   return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(random(2, 9)); 
console.log(random(6, 60)); 
console.log(random(9));
