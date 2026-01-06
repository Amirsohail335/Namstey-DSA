let arr = [5, 3, 7, 1, 9, 6, 2];

function SumOfAllOddElement(n) {
  let isOdd = arr[n] % 2 != 0;

  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }

  return (isOdd ? arr[n] : 0) + SumOfAllOddElement(n - 1);
}

console.log(SumOfAllOddElement(arr.length-1))
