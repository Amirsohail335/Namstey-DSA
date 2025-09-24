let arr = [2, 3, 5, 6, 7, 8, 8, 1,22,12];

function secondLargestNumber(arr) {
  let firstlargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstlargest) {
      secondLargest = firstlargest;
      firstlargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstlargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let res = secondLargestNumber(arr);
console.log(res);

//Second smallest Number

function secondSmallestNumber(arr) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] != firstSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

const y = secondSmallestNumber(arr);
console.log(y);
