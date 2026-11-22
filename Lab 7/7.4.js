function difference(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}
const arr1 = [7, -2, 10, 5, 0];
const arr2 = [0, 10];
console.log(difference(arr1, arr2)); 
const arr3 = ['Beijing', 'Kiev'];
const arr4 = ['Kiev', 'London', 'Baghdad'];
console.log(difference(arr3, arr4)); 
