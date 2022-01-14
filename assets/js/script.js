// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword () {
  var wordBank = "";
  var passLength = prompt("Select a length between 5 and 128 characters for password length");
  console.log(passLength);
  var passLower = confirm("Would you like Lower Case values?");
  var passUpper = confirm("Would you like upper case characters in your password?");
  console.log(passLower, passUpper);
  if (passLower) {
    wordBank += lowerCase;
  }
  if (passUpper) {
    wordBank += upperCase;
  }
  console.log("main password ", wordBank);

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);