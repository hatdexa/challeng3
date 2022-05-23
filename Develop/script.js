// Assignment code here
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#', '$', '%', '^', '&', '*', '()', '[]', '{}'];
var lowerCassArr = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCassArr = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1','2','3', '4', '5', '6', '7', '8', '9', '0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   
    
// Write password to the #password input
function writePassword() {
   var correctPrompts = getPrompts();

  if(correctPrompts){
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;

  }
  else{
    passwordText.value = "";
  }

}
function generatePassword(){
  //I would generatePassword based on the prompts
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];

  }
  return password;

}

function getPrompts(){
  choiceArr =[];
}

function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you wnat your password to be?(8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength >128) {
    alert("character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("would you like lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("would you like uppercase letters in your password?")){
    choiceArr = choiceArr.concat(upperCassArr);
  }
  if (confirm("would you like special letters in your password?")){
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("would you like numbers in your password?")){
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}