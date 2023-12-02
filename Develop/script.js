// Assignment Code
var generateBtn = document.querySelector("#generate");

// create genratePassword function
function generatePassword() {
  // 1.) prompt the user for password criteria
  //   1a password lenght 8-128
  //   1b lowercase, uppercase, special-characters

  // 2.) validate input,

  // 3.) generate password



  // 4.) display password on page
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


