
// Assignment Code

var generateBtn = document.querySelector("#generate");
  var upper= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
  var lower= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numb= [1,2,3,4,5,6,7,8,9,0];
  var symb= ["!","@","#","$","%","^","&","*","(",")","=","+","-","_"];
  var bank= "";

function generatePassword () {
var length= window.prompt("How long do you want your password(8-128)?");
var parseLength = parseInt(length);

if (parseLength<8 || parseLength >128)  {
  window.alert("Invalid must be 8-128 in length");
  return - 1;   
}
let confirmUpper=(Math.floor(Math.random()*upper.length));
let confirmLower=(Math.floor(Math.random()*lower.length));
let confirmNumber=(Math.floor(Math.random()*numb.length));
let confirmSymbol=(Math.floor(Math.random()*symb.length));


var randomUpper = upper[confirmUpper];
var randomLower = lower[confirmLower];
var randomNumber = numb[confirmNumber];
var randomSymbol = symb[confirmSymbol];


console.log(randomUpper)
console.log(randomLower)
console.log(randomNumber)
console.log(randomSymbol)

var upperCase = window.confirm("Click ok if you want uppercase characters?");
var lowerCase = window.confirm ("Click ok if you want lowercase characters?"); 
var numbers = window.confirm ("Click ok if you want numbers?");
var symbols = window.confirm("Click ok if you want symbols?");  
return (parseLength, upperCase, lowerCase, numbers, symbols);

if (upperCase === true) {
  bank = bank +_randomUpper
}

if (lowerCase === true) {
  bank = bank + randomLower;
}

if (numbers === true) {
  bank = bank + randomNumber;
}

if (symbols === true) {
  bank = bank + randomSymbol
}


}

// Write password to the #password input

function writePassword() {  
 
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





