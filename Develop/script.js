// Assignment code here
// Add Variables


// Create Initial Function
var generatePassword = function () {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var specChar = "!@#$%^&*()";
  var criteria = "";
  var generatedPassword = "";
  var lengthP = 0;
  var includedCriteria = "";
  // Prompt Password Length (prompt if not met)(Validate)
  while (!(lengthP >= 8 && lengthP <= 128)) {
    lengthP = window.prompt("Choose a password length. (between 8 to 128 characters long)");
    if (!(lengthP >= 8 && lengthP <= 128)) {
      window.alert("Choose a number between 8-128.");
    } else {
      // Validation
      window.alert("Password length has been chosen.");
      continue
    }
  }

  // Prompt Ask for Character Types (minimum 1, prompt if not met)(Validate)
  function charTypes () {
    // Start of Loop for Character Type Until at Least One Type is Chosen
    while (criteria.length === 0) {

      // choose a character type
      window.alert("At least one character type must be chosen in order to generate password.");
      
      lowerFun();
      function lowerFun() {
        var promptLower = window.prompt('Would you like to include lowercase characters in your password? Enter "YES" or "NO" to choose.');
        promptLower = promptLower.toLowerCase();

        if (!(promptLower === "yes" || promptLower === "no")) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return lowerFun();
        }

        if (promptLower === "no") {
          window.alert("Lowercase characters have been skipped.");
        }

        if (promptLower === "yes") {
          window.alert("Lowercase characters have been added.");
          criteria += lowerCase;
          includedCriteria += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
          console.log(includedCriteria);
        }
      };

      upperFun();
      function upperFun() {
        var promptUpper = window.prompt('Would you like to include uppercase characters in your password? Enter "YES" or "NO" to choose.');

        promptUpper = promptUpper.toLowerCase();
        if (!(promptUpper === "yes" || promptUpper === "no")) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return upperFun();
        };

        if (promptUpper === "no") {
          window.alert("Uppercase characters have been skipped.");
        };

        if (promptUpper === "yes") {
          window.alert("Uppercase characters have been added.");
          criteria += upperCase;
          includedCriteria += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
          console.log(includedCriteria);
        };
      };

      numberFun();
      function numberFun() {
        var promptNumber = window.prompt('Would you like to include number characters in your password? Enter "YES" or "NO" to choose.');

        promptNumber = promptNumber.toLowerCase();
        if (!(promptNumber === "yes" || promptNumber === "no")) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return numberFun();
        }

        if (promptNumber === "no") {
          window.alert("Number characters have been skipped.");
        }

        if (promptNumber === "yes") {
          window.alert("Number characters have been added.");
          criteria += num;
          includedCriteria += num.charAt(Math.floor(Math.random() * num.length));
          console.log(includedCriteria);
      };
    };

      specFun();
      function specFun() {
        var promptSpec = window.prompt('Would you like to include special characters in your password? Enter "YES" or "NO" to choose.');

        promptSpec = promptSpec.toLowerCase();
        if (!(promptSpec === "yes" || promptSpec === "no")) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return specFun();
        }

        if (promptSpec === "no") {
          window.alert("Special characters have been skipped.");
        }

        if (promptSpec === "yes") {
          window.alert("Special characters have been added.");
          criteria += specChar;
          includedCriteria += specChar.charAt(Math.floor(Math.random() * specChar.length));
          console.log(includedCriteria);
        }
      };
    };

    return finishedRes();
    function finishedRes() {
      for (var i=0; i<(lengthP - includedCriteria.length); i++) {
        generatedPassword += criteria.charAt(Math.floor(Math.random() * criteria.length));
      }
      generatedPassword += includedCriteria;
      window.alert("Password criteria successfully set, Thank You!");
      return generatedPassword;
    };
  };
  return charTypes();


};
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