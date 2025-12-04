function GenerateAtoZ() {
  const result = [];

  const A_CODE = "A".charCodeAt(0);
  const Z_CODE = "Z".charCodeAt(0);

  for (let letter = A_CODE; letter <= Z_CODE; letter++) {
    result.push(String.fromCharCode(letter));
  }

  return result;
}
let res = GenerateAtoZ();
console.log(res);
