var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function(){
  var password = generatePassword();
  passwordText.value = password;
 })

function generatePassword() {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
 var passwordLength = 12;

 var password = "";
 for (let i = 0; i<passwordLength; i++){
  const randomIndex = Math.floor(Math.random() * charset.length);
  password += charset[randomIndex];
 }

return password;}



