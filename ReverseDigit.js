function ReverseDigit(n) {
  let nCopy = n;
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    let last = n % 10;
    rev = 10 * rev + last;
    n = n / 10;
  }
  //Edge case
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;
  return nCopy < 0 ? -rev : rev;
}

let result = ReverseDigit(21);
console.log(result);
