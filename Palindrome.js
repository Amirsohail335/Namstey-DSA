function Palindrome(n) {
    let nCopy = n
  if (n < 0) return false;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  if (rev == nCopy) {
    return true;
  } else {
    return false;
  }
}

let num = Palindrome(121);
console.log(num);
