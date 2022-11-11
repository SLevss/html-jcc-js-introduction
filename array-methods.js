//----------- 1.Write function minMax(numbers) ----------------
let numbers = [1, 2, 3, 4, 5];
console.log(`Input array: ${numbers}`);
console.log(`Output array: ${minMax(numbers)}`);
function minMax(numbers) {
  return numbers.reduce((num,elem)=> { if(elem<num[0]){num[0]=elem;} if (elem>num[1]){num[1]=elem;} return num;},[numbers[0],numbers[0]]);
}


//----------2.Write function deleteWithPrefix(strings, prefix)-----
let strings = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];
let prefix = 'old_';
console.log(`Input array: ${strings}`);
console.log(`Output array without prefix: ${deleteWithPrefix(strings, prefix)}`);
function deleteWithPrefix(strings, prefix) {
  let slice = function (strings) {
    return strings.slice(0, prefix.length);
  };
  return strings.map(slice).filter(value => value !== prefix);
  }

//----------3.Write function getSortedEvenOdd(numbers)------------

numbers = [1, 6, 3, 8, 5, 2, 7, 4];
console.log(`Input array: ${numbers}`);
console.log(`Output array sorted: ${getSortedEvenOdd(numbers)}`);

function getSortedEvenOdd(numbers) {
  newArray = numbers.slice();
  return newArray.sort((x,y) => { return x % 2 == 0 && x < y ? -1: y % 2 == 0 ? 1: y - x;});
}