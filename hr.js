
// MATH

// Returns a random integer from 0 to 9:
//Math.floor(Math.random() * 10);


// ARRAY METHODS

// .at()
// array1.concat()
  // merge two or more arrays
  // does not change existing arrays - returns new array
  // array1.concat(array2);   // concat(value0, value1, ... , valueN)
      //  .....

// .copyWithin()

// .entries()
  // returns a new Array Iterator object that contains the key/value pairs for each index in the array
  // ... learn about array iterators....

// .every()

// .fill()
  // changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
  // array1.fill(valueToFillWith, startIndex, endIndexNotInclusive);

// .filter()

// .find()
  // returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  // const found = array1.find(element => element > 10);

// .findIndex()


// .flat()
  // flat(depth) - optional
  // creates a new array with all sub-array elements concatenated into it recursively up to the specified depth..how deep a nested array structure should be flattened
    // ... other stuff to learn along w this one

// .flatMap()
// .forEach()
// .from()

// .includes()
  // includes(searchElement)
  // .includes(searchElement, fromIndex)   - values counts back from end  ..past length index always false ... past start index uses whole array
  // determines whether an array includes a certain value among its entries, returning true or false as appropriate

// .indexOf()
  // array1.indexOf(value)
  // method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// .isArray()
  // is the value an array? true of false
  // Array.isArray(value)

// .join()  w no separator .. looks like .toString()
  // .join(separator)
  // creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator

// .keys()
  // returns a new Array Iterator object that contains the keys for each index in the array.
    // so .. returns the indexes

// .lastIndexOf()
  // returns the last index at which a given element can be found in the array, or -1 if it is not present .. searches back from "fromIndex"
    // array1.lastIndexOf('value');
    // array1.lastIndexOf('value', fromIndex);


// .map()
// .of()




// .reduce()
// .reduceRight()

// .reverse()
  // reverses an array in place. The first array element becomes the last, and the last array element becomes the first



// Adding / removing elements from array beginning/end

// .pop()
  // adds one or more elements to the beginning of an array and returns the new length of the array

// .push()
  // adds one or more elements to the end of an array and returns the new length of the array

// .shift()
  // removes the first element from an array and returns that removed element. This method changes the length of the array

  // .unshift()
    // adds one or more elements to the beginning of an array and returns the new length of the array



// .slice()
  // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified


// .some()

// array1.sort()
  // in place, ascending sort of elements

// .splice()
// .toLocaleString()

// .toString()
  // returns all elements as a single comma separated string



// .values()
  // returns a new Array Iterator object that contains the values for each index in the array
      // why does one use an iterator rather than looping the array? or is ...uhm..what is this for?
          // ... more here to learn ....

// OBJECT METHODS

// o.hasOwnProperty(value);
  // determine whether an object has the specified property as a direct property of that object; unlike the in operator, this method does not check for a property in the object's prototype chain


// LOOPS

// for in -  all enumerable properties of an object that are keyed by strings

// const object = { a: 1, b: 2, c: 3 };
//
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// for of - over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. ....



// UTILITY

// Generate an array of random numbers between 1 and maxVal
// let maxVal = 1000;
// let kQty = 200;
// let kArray = [];
//
// for (let i = 0; i < kQty; i++) {
//   kArray.push(Math.floor((Math.random() * maxVal) + 1));
// }






// 1. understand and re state the problem as succinctly as possible
// 2. define the edge cases
// 3. do it on paper
// 4.

// create a timer ...
// array generator ...


// Given an array of integers, find the longest subarray where absolute difference between any two elements is less than or equal to 1

// sample
// let a = [1, 1, 2, 2, 4, 4, 5, 5, 5]; //= 5
// let a = [4, 6, 5, 3, 3, 1]; //  = 3
// let a = [1, 2, 2, 3, 1, 2]; // = 5
// let a = [1, 1, 1, 1, 1, 1, 3, 4, 3, 4]; // = 6

// edge
// could be majority single digits
// could be unordered

// function pickingNumbers(a) {
//   let uniqueCounts = {};
//   let uniqueNumbers = [];
//   let subArrayLengths = [];
//
//   // creates an object of  'array item' : count
//   // and an array of unique digits
//   for (let i = 0; i < a.length; i++) {
//       let uniqueNumber = a[i];
//       if(uniqueCounts[uniqueNumber]){
//           uniqueCounts[uniqueNumber]++
//       } else {
//         uniqueCounts[uniqueNumber] = 1;
//         uniqueNumbers.push(uniqueNumber);
//       }
//   }
//
//   // length of single digit subArrays
//   for (const count in uniqueCounts) {
//     subArrayLengths.push(uniqueCounts[count]);
//   }
//
//   // length of compared digit subArrays
//   for(let i = 0; i < uniqueNumbers.length - 1; i++){
//     for (let j = i + 1; j < uniqueNumbers.length; j++) {
//       if(Math.abs(uniqueNumbers[i] - uniqueNumbers[j]) <= 1){
//         let subArrayLength = uniqueCounts[uniqueNumbers[i]] + uniqueCounts[uniqueNumbers[j]];
//         subArrayLengths.push(subArrayLength);
//       }
//     }
//   }
//   // max length of subarrays
//   return Math.max(...subArrayLengths);
// }
//
// let result = pickingNumbers(a);
//
// console.log(result);



//  determine most expensive keyboard and drive that can be purchased within budget. Given price lists for keyboard and drives and a budget, return cost to buy them. If not possible to buy both items, return -1

// sample

// [40, 50, 60], [5, 8, 12], 60); // = 58

  // less than 1k in the key/drive arrays
  // budget < 10 to the 6th
  // prices 1 > 10 to the 6th

// 10 2 3
// 3 1
// 5 2 8
//
// = 9

// 5 1 1
// 4
// 5

// = -1


// unequal array lengths
// unordered prices

// function getMoneySpent(keyboards, drives, b) {
//
//   // sort ascending
//   keyboards = keyboards.sort((a, b) => a - b);
//   drives = drives.sort((a, b) => a - b);
//
//   // remove items over budget
//   for (let i = keyboards.length-1; i>=0; i--) {
//     if (keyboards[i] >= b) {
//       keyboards.pop(i);
//     } else {
//       break;
//     }
//   }
//
//   for (let i = drives.length-1; i < i>=0; i--) {
//     if (drives[i] >= b) {
//       drives.pop(i);
//     } else {
//       break;
//     }
//   }
//
//   let found;
//   let maxPrice = -1;
//
//   for (let i = 0; i < keyboards.length; i++) {
//     for (let j = drives.length - 1; j >= 0; j--) {
//       if (keyboards[i] + drives[j] === b) {
//           maxPrice = b;
//           found = true;
//           break;
//       }
//       if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > maxPrice) {
//           maxPrice = keyboards[i] + drives[j];
//           break;
//       }
//     }
//     if (found) break;
//   }
//   return maxPrice;
// }


function testArray(qty, maxVal){
  let newArray = [];

  for (let i = 0; i < kQty; i++) {
    newArray.push(Math.floor((Math.random() * maxVal) + 1));
  }
  return newArray;
}


let maxVal = 1000;
let kQty = 30;
let kArray = [];

for (let i = 0; i < kQty; i++) {
  kArray.push(Math.floor((Math.random() * maxVal) + 1));
}

let dQty = 20;
let dArray = [];

for (let i = 0; i < dQty; i++) {
  dArray.push(Math.floor((Math.random() * maxVal) + 1));
}




//https://www.hackerrank.com/challenges/equality-in-a-array/problem
// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// array = [1,2,2,3]

// min deletions
// leave only a single value

// 2 deletions leaves [2,2]   3 deletions would leave [1] or [3]   both valid results .. 2 is the least


let newArray = [1,2,2,3];
let newArray = testArray();;

function equalizeArray(arr) {


}

let results = equalizeArray(testArray);
console.log(results);



















//https://www.hackerrank.com/challenges/simple-array-sum/problem
// sum array
// [1, 2, 3, 4, 10, 11]
//
// function ssumArray(ar) {
//     let result = 0;
//     for(let i = 0; i < ar.length; i++){
//         result += ar[i];
//     }
//     return result;
// }
//
//
// // compare Triplets
//
// 5, 6, 7
// 3, 6, 10
//
//
// //for loops
