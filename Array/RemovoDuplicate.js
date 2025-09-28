function RemoveDuplicate(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
    return x + 1;
  }
}

let arr = [1, 1, 2,4,4,5,6,7,7,8];
let res = RemoveDuplicate(arr);
console.log(res);
