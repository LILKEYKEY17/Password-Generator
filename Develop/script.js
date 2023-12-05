// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// Critia prompts for password to generate
 var uppercase = confirm("Your password should have an uppercase letter! Click OK to use");
 var lowercase = confirm("Your password should have a lowercase letter! Click OK to use");
 var symbols = confirm("Your password should have a symbol! Click OK to use");
 var numbers = confirm("Your password should have a number! Click OK to use");
 var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to use");

// Password variables for allowable passwords characters
 var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
 var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
 var specialSymbols ="!@#$%^&*()?.<>|=+,[-_]"
 var numeric ="0123456789"
 var multiSelect =[];

//Input critia
 if (keyLength < 8 || keyLength > 128) {
  alert("Your password does not meet the critia");
  var keyLength = prompt("Password must be between 8 and 128 characters in length.");
 }

 if (uppercase === false && lowercase === false && symbols === false && numbers === false) {
 return "You must pick at least one character option!";
 };

 if (lowercaseABC) {multiSelect += lowercaseABC;}
 if (uppercaseABC) {multiSelect += uppercaseABC;}
 if (numeric) {multiSelect += numeric;}
 if (specialSymbols) {multiSelect += specialSymbols;}

 let finalPassword = ""
 for (let i = 0; i < keyLength; i++) {
  let rng =[Math.floor(Math.random() * multiSelect.length)];
  finalPassword = finalPassword + multiSelect[rng];
 }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
