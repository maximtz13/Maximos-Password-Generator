// Assignment code here
// Add Variables
var criteria = [];
var password = "";
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = lowerCase.map(function (a) {
  return a.toUpperCase();
});
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = ['/', '[', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '\\', '-', '=', '{', '}', ';', ':', '"', '|', ',', '.', '<', '>', '?', '+', ']'];
var lengthP = 0;

// Create Initial Function
var generatePassword = function () {
  // Prompt Password Length (prompt if not met)(Validate)
  while (!(lengthP >= 8 && lengthP <= 128)) {
    lengthP = window.prompt("Choose a password length. (between 8 to 128 characters long)");
    if (!(lengthP >= 8 && lengthP <= 128)) {
      window.alert("Choose a number between 8-128.");
    } else {
      // Validation
      window.alert("Thank you for choosing a password length.");
      continue
    }
  }

  // Prompt Ask for Character Types (minimum 1, prompt if not met)(Validate)
  var charTypes = function () {
    // Start of Loop for Character Type Until at Least One Type is Chosen
    while (criteria.length === 0 || criteria.length === "") {
      var passwordCrit = ""
      // choose a character type
      window.alert("At least one character type must be chosen in order to generate password.");
      lowerFun();

      function lowerFun() {
        var promptLower = window.prompt('Would you like to include lowercase characters in your password? Enter "YES" or "NO" to choose.');

        if (promptLower === "" || promptLower === null) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return lowerFun();
        }

        promptLower = promptLower.toLowerCase();
        if (promptLower === "no") {
          window.alert("Lowercase characters have been skipped.");
          upperFun();
        }

        if (promptLower === "yes") {
          window.alert("Lowercase characters have been added.");
          criteria+=lowerCase;
          passwordCrit += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          upperFun();
        }
      };

      upperFun();
      function upperFun() {
        var promptUpper = window.prompt('Would you like to include uppercase characters in your password? Enter "YES" or "NO" to choose.');

        if (promptUpper === "" || promptUpper === null) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return upperFun();
        };

        promptUpper = promptUpper.toLowerCase();
        if (promptUpper === "no") {
          window.alert("Uppercase characters have been skipped.");
          numberFun();
        };

        if (promptUpper === "yes") {
          window.alert("Uppercase characters have been added.");
          criteria+=upperCase;
          passwordCrit += upperCase[Math.floor(Math.random() * upperCase.length)];
          numberFun();
        };
      };

      numberFun();
      function numberFun() {
        var promptNumber = window.prompt('Would you like to include number characters in your password? Enter "YES" or "NO" to choose.');

        if (promptNumber === "" || promptNumber === null) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return numberFun();
        }

        promptNumber = promptNumber.toLowerCase();
        if (promptNumber === "no") {
          window.alert("Number characters have been skipped.");
          specFun();
        }

        if (promptNumber === "yes") {
          window.alert("Number characters have been added.");
          criteria = +num;
          passwordCrit += num[Math.floor(Math.random() * num.length)];
          specFun();
        }
      };

      specFun();
      function specFun() {
        var promptSpec = window.prompt('Would you like to include special characters in your password? Enter "YES" or "NO" to choose.');

        if (promptSpec === "" || promptSpec === null) {
          window.alert('You must enter "YES" or "NO" to proceed! Please try again.');
          return specFun();
        }

        promptSpec = promptSpec.toLowerCase();
        if (promptSpec === "no") {
          window.alert("Special characters have been skipped.");
          finishedRes();
        }

        if (promptSpec === "yes") {
          window.alert("Special characters have been added.");
          criteria += specChar;
          passwordCrit += specChar[Math.floor(Math.random() * specChar.length)];
          finishedRes();
        }
        console.log(criteria);
      };
    };
    finishedRes();
    function finishedRes() {
      window.alert("Password criteria successfully set, Thank You!")
      return passwordCrit;
    };
  };

  password += charTypes();

  charOptions = [];

  for (i = 0; i < criteria.length; i++) {
    if (criteria[i] === ',') {
      continue;
    }
    else {
      charOptions += criteria[i];
    }
  }

  var charLength = lengthP - password.length;

  for (let i = 0; i < charLength; i++) {
    password += charOptions[Math.floor(Math.random() * charOptions.length)];
  }

  return password;
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
