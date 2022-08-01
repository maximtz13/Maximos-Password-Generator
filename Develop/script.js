// Assignment code here

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
