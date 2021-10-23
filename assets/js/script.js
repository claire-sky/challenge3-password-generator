// Assignment code here

var passwordLength = 0

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