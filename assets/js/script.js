// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "12345678901234567890";
var specialChar = '!"#$%&()*+,-.;:<>=?@[]_^`{}~|';
var passLengthNum = "";
var passLength = "";
var wordBank = "";
var password = "";

function passwordLength() {
  passLength = prompt("Choose a password length between 5 and 128 characters!");

  if (passLength >= 5 && passLength <= 128) {
    passLengthNum = parseInt(passLength);
  }
  else {
    alert("Choose a number between 5 and 128!");
    passwordLength();
  }
};

function passOptions() {
  //give user the option to pick what styles are added to the password
  var lowerCaseOption = confirm("Would you like lower case numbers in your password?");
  var upperCaseOption = confirm("Would you like upper case numbers in your password?");
  var numberOption = confirm("Would you like numbers in your password?");
  var specialOption = confirm("Would you like special characters in your password?");

  //if statements to handle yes or no options
  if (lowerCaseOption) wordBank += lowerCase;
  if (upperCaseOption) wordBank += upperCase;
  if (numberOption) wordBank += numberString;
  if (specialOption) wordBank += specialChar;

  return wordBank;

};

function randArray() {
  for (var i =0; i < passLengthNum; i++) {
    var randCharacter = wordBank[Math.floor(Math.random() * wordBank.length)];
    password += randCharacter;
  }
  return password;
};

function generatePassword() {
  passwordLength();
  passOptions();
  randArray();
};

function writePassword() {
  password = "";
  alert("Please choose what you would like to be in your password?");

  generatePassword();

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);