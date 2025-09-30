function capitalizeWords(sentence) {
    return sentence
      .trim() // remove leading/trailing spaces
      .split(/\s+/) // split by one or more spaces
      .map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        let rest = word.slice(1).toLowerCase(); // lowercase rest
        return firstLetter + rest;
      })
      .join(" ");
  }
  //For the purpose of user debugging.
  capitalizeWords("hello world");
  module.exports = capitalizeWords

 console.log(capitalizeWords("hello world MY nAMe is khan")); // Output: "Hello World My Name Is Khan"