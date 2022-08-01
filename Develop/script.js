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
var generatePassword = function () {
  // Prompt Password Length (prompt if not met)(Validate)
  while (!(length >= 8 && length <= 128)) {
    length = window.prompt("Choose a password length. (between 8 to 128 characters long)");
    if (!(length >= 8 && length <= 128)) {
      window.alert("Choose a number between 8-128.");
    } else { 
      // Validation
      window.alert("Thank you for choosing a password length."); 
      continue }
  }

  // Prompt Ask for Character Types (minimum 1, prompt if not met)(Validate)
  // After All Prompts Generate Password On Page
};

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
