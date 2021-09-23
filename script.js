// Assignment Code


//function to generate password


function generatePassword() {
  var lengthCriteria = window.prompt("How long would you like your new password to be, it can be no fewer than 8 and no more than 128.");

  var up = window.confirm("Would you like to include upper case letters?")
  var low = window.confirm("Would you like to include lower case letters?")
  var special = window.confirm("Would you like to include special characters?")
  var num = window.confirm("Would you like to include numbers?")

  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var specSymb = ["!", "'", "@", "#", "$", "%", "^", "&", "*", "+", "?", "(", ")", ",", "-", ".", "/", ":", ";", "<", ">", "=", "[", "]", "|", "_", "~", "{", "}"]
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var passArray = [];
  var pool=[];

  if (lengthCriteria < 8 || lengthCriteria > 128) {
    window.alert("Please choose no more fewer than 8 characters and no more than 128 characters");
    lengthCriteria = window.prompt("How long would you like your new password to be, it can be no fewer than 8 and no more than 128.");
  }

  if (up) {
   pool = pool.concat(upper)
  }
  if (low) {
    pool = pool.concat(lower)
  }
  if (special) {
    pool = pool.concat(specSymb)
  }
  if (num) {
    pool = pool.concat(numbers)
  }

  for(var i = 0; i < lengthCriteria; i++) {
    var selectedChar = Math.floor(Math.random() * pool.length);
    passArray.push(pool[selectedChar])
  }
  return passArray.join("");
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);