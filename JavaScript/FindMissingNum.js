function FindMissingNumber(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, current) => {
    return sum + current;
  }, 0);

  return expectedSum - actualSum;
}

arr = [1, 0, 3, 4, 6, 5, 7];

let res = FindMissingNumber(arr);

console.log(res);
