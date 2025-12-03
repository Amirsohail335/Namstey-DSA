function CountVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  let foundVowels = [];

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;

      foundVowels.push(char);
    }
  }
  return { vowels: count, foundVowels: foundVowels };
}

function CountVowelsAndConstant(str) {
  let vowels = "aeiouAEIOU";
  let vowelsCount = 0;
  let constantCount = 0;
  let foundVowels = [];
  let foundConstant = [];

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelsCount++;
        foundVowels.push(char);
      } else {
        constantCount++;
        foundConstant.push(char);
      }
    }
  }
  return {
    vowelsCount: vowelsCount,
    constantCount: constantCount,
    foundConstant: foundConstant,
    foundVowels: foundVowels,
  };
}

// console.log(CountVowels("Amir Sohail"));
console.log(CountVowelsAndConstant("Amir Sohail S"));
