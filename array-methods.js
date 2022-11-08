function ulSurround() {

  let strings = ["abc", "lmn", "cd"];
  let newLastElement = "</ul>";
  let ulSurround = strings.map(function (strings) {
    return "<li>" + strings + "</li>";
  }).join('","');
   let ulSurrounding = plusElements(ulSurround);
  return ulSurrounding;

};

console.log(ulSurround());

function plusElements(ulSurround) {
  let newFirstElement = "<ul>";
  let newLastElement = "</ul>";
  let ulSurrounding = [newFirstElement].concat(ulSurround);
  ulSurrounding.push(newLastElement);
  return ulSurrounding;
}

function count(strings, str) {
  return strings.reduce((count, el) => count + (el == str), 0);
}

let strings = ["abc", "lmn", "cd", "abc", "abc"];
let str = "abc";
console.log(str + " element encountered in array [" + strings + "]  " + count(strings, str));

str = "ab";
console.log(str + " element encountered in array [" + strings + "]  " + count(strings, str));

function arrayCopy(src, srcPos, dst, dstPos, length) {

  let newMediumArray = src.slice(srcPos, srcPos + length);//4,5,6
  let newLastArray = dst.slice((dstPos)); //50,60,70
  dst = dst.slice(0, dstPos).concat(newMediumArray).concat(newLastArray); //


  return dst;
}

console.log(arrayCopy([1, 2, 3, 4, 5, 6, 7], 3, [10, 20, 30, 40, 50, 60, 70], 4, 3));

let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [1, 2, 3, 4, 5, 6, 7];
move(array1,3,-1);
move(array2,2,4);
console.log("Output array: " + array1);
console.log("Output array: " + array2);

function move(array, index, offset) {
   let element = array.splice(index,1)[0];
  array.splice(index+offset, 0, element);
 
}

