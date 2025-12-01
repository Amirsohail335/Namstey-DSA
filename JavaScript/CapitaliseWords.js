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
  
  module.exports = capitalizeWords

  //For the purpose of user debugging.
  let res =capitalizeWords("hello world  nAMe is khan singH");
  console.log(res);

