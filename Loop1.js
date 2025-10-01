// for (let i = 1; i < 11; i++) {
//   console.log(i + ": hi");
// }

let arr = [1, 3, 4, 5, 5, 4, 64, 3, 42, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

// searchElement(arr, 3);
// const result = searchElement(arr, 11);
// console.log(result);

//Number of negative element in arr
let arr1 = [-1, 2, 4, -3, 5, -7, 0];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let count = countNegatives(arr1);
console.log(count);

// Find largest number in an array 

function largestNumber(arr) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

// const x = largestNumber(arr1);
// console.log(x);

//Find smallest number in an array
function smallestNumber(arr) {
  let result = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
}

// const z = smallestNumber(arr1);
// console.log(z);
