//Here are my variables,they are placed on top for orginization, and I will call on these variables through out the script  
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var letters = []
var charsetNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charsetCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charsetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charsetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//This event listener is activated when the "generate password" button is clicked, this starts the process of the passsword prompts.
generateBtn.addEventListener("click", function(){
  var password = generatePassword();
  passwordText.value = password;
 })
//This function sets the parameters and displays 5 prompts. Each prompt will determine what the new password will be generated as.
function generatePassword() {
 
 let passwordLength = window.prompt("Choose between 8 or 128 characters");
 let lowerCase = window.confirm("Would you like to use Lowercased letters?");
 let upperCase = window.confirm("Would you like to use Uppercase letters?")
 let numberStuff= window.confirm ("Would you like to use Numbers?")
 let characterStuff = window.confirm ("Would you like to use Special Characters?")
// if the password length does not meet the criteria requested, it will take you back to the first prompt until you choose a suitable length.
 if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("please enter a valid password length");
  return"";
 }

 if (lowerCase){
  letters = letters.concat(charsetLower)
 };

 if (upperCase){
 letters = letters.concat(charsetUpper)
};

if (numberStuff){
  letters = letters.concat(charsetNumber)
};

if (characterStuff){
  letters = letters.concat(charsetCharacter)
};
 

//this for loop will allow me to repeatedly request a random password, starting the process over again when needed.
 var password = "";
 for (let i = 0; i<passwordLength; i++){
  password = password + letters[Math.floor(Math. random() *letters.length)]
 }

return password;}

