function CountVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return { vowels: count };
}

console.log(CountVowels("Amir Sohail"))
