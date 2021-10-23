// Assignment code here

var passwordLength = 0
var passwordCharacter = 0

// Prompts for password criteria
var lengthCriteria = function() {
  // Choose length of the password (8 - 128 characters)
  passwordLength = window.prompt("Enter character length of password. Must be between 8-128 characters.")
  // Validate length
    if (passwordLength > 128) {
      window.alert("Must be less than 129 characters.");
      lengthCriteria();
    } else if (passwordLength < 8) {
      window.alert("Must be more than 7 characters.");
      lengthCriteria();
    } else {
      var lengthConfirm = window.confirm("You entered " + passwordLength + " characters. Is that correct?")
        if (lengthConfirm) {
          console.log(passwordLength);
        } else {
          lengthCriteria();
        }
    };
};

var characterCriteria = function() {
  // Confirm character types (lowercase, uppercase, numeric, and/or special characters)
  window.alert("Please select at least one character type: lowercase, uppercase, numeric, and/or special characters.");
      
    // Create lowercase check
    var lowercaseCharacter = window.confirm("Do you want to include lowercase characters?")
      if (lowercaseCharacter) {
        console.log(lowercaseCharacter);
      };

    // Create uppercase check
    var uppercaseCharacter = window.confirm("Do you want to include uppercase characters?")
      if (uppercaseCharacter) {
        console.log(uppercaseCharacter);
      };

    // Create numeric check
    var numericCharacter = window.confirm("Do you want to include numbers?")
      if (numericCharacter) {
        console.log(numericCharacter);
      };

    // Create special characters check
    var specialCharacter = window.confirm("Do you want to include special characters?")
      if (specialCharacter) {
        console.log(specialCharacter);
      };

    // Validate character type (minimum of 1)
    passwordCharacter = [lowercaseCharacter, uppercaseCharacter, numericCharacter, specialCharacter];
    var characterTypes = passwordCharacter.filter(Boolean).length;
    if (characterTypes < 1) {
      characterCriteria();
    };

    console.log(characterTypes);
    console.log(passwordCharacter);

    var characterCount = (passwordLength / characterTypes);
    console.log(characterCount);
  };

// Click the button to generate a password
var generatePassword = function() {
  lengthCriteria();
  characterCriteria();
};

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

generatePassword();