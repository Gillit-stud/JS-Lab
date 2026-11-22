function removeElements(array, ...items) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (items.includes(array[i])) {
      array.splice(i, 1);
    }
  }
}
const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 5, 1, 6);
console.log(array3);
const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log(array4); 
