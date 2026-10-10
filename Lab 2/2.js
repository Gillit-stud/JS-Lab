function range (start, end) {
    const result = [];
    for( let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};
const ran1 = range(15, 30);
console.log(ran1);
function rangeOdd (start, end) {
    const result = [];
    for(let i = start; i <= end; i++) {
       if(i % 2 !==0) {
          result.push(i);
        }
    }
    return result;
};
const ran2 = rangeOdd(15, 30);
console.log(ran2);
