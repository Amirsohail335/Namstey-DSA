function ReverseString(s) {
  let len = s.length;
  let halflen = Math.floor(len / 2);

  for (let i = 0; i < halflen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }

  return s;
}

let arr = ["a", "m", "i", "r"];

let arr1 = ['m','i','n','t','u']

let result = ReverseString(arr1);

console.log(result);
