// Assignment code here

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialcharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", ",", "<", ".", ">", "/", "?", ":", ";", "'", "+", "-"];

var choosepasswordlength;
var choosenumbers;
var chooselowercase;
var chooseuppercase;
var choosespecialcharacter;

function generatePassword() {

  choosepasswordlength = prompt("How many characters would you like your password to contain? Choose a number between 8 to 128");


  while (choosepasswordlength <= 8 || choosepasswordlength >= 128){
    alert("Password length needs to be between 8 to 128 characters. Please try again!");
    choosepasswordlength = prompt("How many characters would you like your password to contain? Choose a number between 8 to 128");
  }

  choosenumbers = confirm("Click OK to include numerical characters in your password");
  chooselowercase = confirm("Click OK to include lowercase characters in your password");
  chooseuppercase = confirm("Click OK to include uppercase characters in your password");
  choosespecialcharacter = confirm("Click OK to include special characters in your password");














}














// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);