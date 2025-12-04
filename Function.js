function sum(a, b) {
  let total = a + b;
  console.log("Total sum :" + total);
}

// sum(4,5)

function isEligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid age");
  } else if (age < 18) {
    console.log("Not Eligible to Vote");
  } else {
    console.log("Elgible to Vote");
  }
}

// isEligibleToVote(12);
// isEligibleToVote(-1);
// isEligibleToVote(19);

//To check a number is even or odd

function OddEven(num) {
  if (num % 2 == 0) {
    console.log(num + " is even Number list");
  } else {
    console.log(num + " is Odd number list");
  }
}

OddEven(3)
OddEven(6)
