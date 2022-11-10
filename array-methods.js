//----------- 1.Write function minMax(numbers) ----------------
let numbers = [1, 2, 3, 4, 5];
console.log('Input array =', numbers);
console.log('Output array =', minMax(numbers));

function minMax(numbers) {
  let minElement = arrayMin(numbers);
  let maxElement = arrayMax(numbers);
  let result = [];
  result.unshift(minElement);
  result.push(maxElement);
  return result;
}

function arrayMin(numbers) {
  return numbers.reduce(function (x, y) {
    return (x < y ? x : y);
  });
}
function arrayMax(numbers) {
  return numbers.reduce(function (x, y) {
    return (x > y ? x : y);
  });
}
//----------2.Write function deleteWithPrefix(strings, prefix)-----
let strings = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];
let prefix = 'old_';
console.log('Output array without prefix =', deleteWithPrefix(strings, prefix));
function deleteWithPrefix(strings, prefix) {
  let slice = function (strings) {
    return strings.slice(0, prefix.length);
  };
  return strings.map(slice).filter(value => value !== prefix);
  }

//----------3.Write function getSortedEvenOdd(numbers)------------

numbers = [1, 6, 3, 8, 5, 2, 7, 4];
console.log('Input array =', numbers);
console.log('Output array sorted  =', getSortedEvenOdd(numbers));

function getSortedEvenOdd(numbers) {
  let evenResult = numbers.filter(elem => elem % 2 == 0).sort();
  let oddResult = numbers.filter(elem => elem % 2 !== 0).reverse();
  let result = [];
  result.unshift(evenResult);
  result.push(oddResult);
  return result;
}