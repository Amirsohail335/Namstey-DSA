function CountVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  let foundVowels = []

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;

      foundVowels.push(char)
    }
  }
  return { vowels: count , foundVowels:foundVowels};
}

console.log(CountVowels("Amir Sohail"))
