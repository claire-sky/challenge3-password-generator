// Universal variables
var passwordLength = 0;
var passwordCharacter = 0;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var remainderCount = 0;
var characterCount = 0;
var characterTypes = 0;
var password = "";
var lowercaseCharacter = "";
var uppercaseCharacter = "";
var numericCharacter = "";
var specialCharacter = "";

// Prompts for password criteria
var lengthCriteria = function() {
  // Choose length of the password (8 - 128 characters)
  passwordLength = parseInt(window.prompt("Enter character length of password. Must be between 8-128 characters."));
  // Validate length
    if (!Number.isInteger(passwordLength) || passwordLength == NaN) {
      window.alert("Please enter a number between 8-128.");
      lengthCriteria();
    } else if (passwordLength > 128) {
      window.alert("Must be less than 129 characters.");
      lengthCriteria();
    } else if (passwordLength < 8) {
      window.alert("Must be more than 7 characters.");
      lengthCriteria();
    } else {
      var lengthConfirm = window.confirm("You entered " + passwordLength + " characters. Is that correct?");
        if (lengthConfirm = false) {
          lengthCriteria();
        };
    };
};

var characterCriteria = function() {
  // Confirm character types (lowercase, uppercase, numeric, and/or special characters)
  window.alert("Please select at least one character type: lowercase, uppercase, numeric, and/or special characters.");
      
    // Create lowercase check
    lowercaseCharacter = window.confirm("Do you want to include lowercase characters?")

    // Create uppercase check
    uppercaseCharacter = window.confirm("Do you want to include uppercase characters?")
      
    // Create numeric check
    numericCharacter = window.confirm("Do you want to include numbers?")

    // Create special characters check
    specialCharacter = window.confirm("Do you want to include special characters?")

    // Validate character type (minimum of 1)
    passwordCharacter = [lowercaseCharacter, uppercaseCharacter, numericCharacter, specialCharacter].filter(Boolean);

    characterTypes = passwordCharacter.filter(Boolean).length;
    if (characterTypes < 1) {
      characterCriteria();
    };

    characterCount = Math.floor(passwordLength / characterTypes);
    remainderCount = passwordLength - (characterCount * characterTypes) + characterCount;
};

// Generate amount of each character type
var generateCharacters = function() {
  // Logic for amount of lowercase characters
  if (lowercaseCharacter) {
    for (i = 0; i < remainderCount; i++) {
      password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    };
  };
  // Logic for amount of uppercase characters
  if (uppercaseCharacter) {
    if (lowercaseCharacter && characterTypes > 1) {
      for (i = 0; i < characterCount; i++) {
        password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      };
    } else {
      for (i = 0; i < remainderCount; i++) {
        password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      };
    };
  };
  // Logic for amount of numeric characters
  if (numericCharacter) {
    if (lowercaseCharacter && characterTypes > 1 || uppercaseCharacter && characterTypes > 1) {
      for (i = 0; i < characterCount; i++) {
        password += numeric.charAt(Math.floor(Math.random() * numeric.length));
      };
    } else {
      for (i = 0; i < remainderCount; i++) {
        password += numeric.charAt(Math.floor(Math.random() * numeric.length));
      };
    };
  };
  if (specialCharacter) {
    for (i = 0; i < characterCount; i++) {
      password += special.charAt(Math.floor(Math.random() * special.length));
    };
  };
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
};
   
// Click the button to generate a password
var generatePassword = function() {
  lengthCriteria();
  characterCriteria();
  generateCharacters();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);