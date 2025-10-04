function RemoveElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  let uniqueElements = nums.slice(0, x );
  console.log(uniqueElements,'Uniques Elements');
  return x;
}

let nums = [1, 3, 4, 5, 4, 9, 4, 2];
let val = 4;

let result = RemoveElement(nums, val);
console.log(result);
