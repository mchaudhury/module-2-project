console.log("Welcome to the password validator tool!");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Please, validate your password (at least 10 characters & an Uppercase 1st letter): ",
  function (input) {
    userPassword = input.split("");

    validatePass = userPassword.length;

    specialChar = userPassword[0];

    newSpecialChar = specialChar.toUpperCase();

    if (validatePass >= 10 && specialChar === newSpecialChar) {
      console.log("Congratulations, successful entry!");
    } else {
      console.log(
        "Sorry, failed entry! - Password needs to be at least 10 characters and Uppercase 1st letter"
      );
    }

    console.log(
      "User Password message: ",
      `This password is ${validatePass} characters long`
    );

    reader.close();
  }
);
