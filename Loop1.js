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
const result = searchElement(arr, 11);
console.log(result);
