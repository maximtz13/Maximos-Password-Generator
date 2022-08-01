// Assignment code here
// Add Variables
var criteria = [];
var password = "";
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = lowerCase.map(element => { return element.toUpperCase(); });
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = ['/', '[', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '\\', '-', '=', '{', '}', ';', ':', '"', '|', ',', '.', '<', '>', '?', '+', ']'];
var length = 0;
// Create Initial Function
// Prompt Password Length (prompt if not met)(Validate)
// Prompt Ask for Character Types (minimum 1, prompt if not met)(Validate)
// After All Prompts Generate Password On Page

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
