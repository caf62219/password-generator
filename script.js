
// Assignment Code

var generateBtn = document.querySelector("#generate");
  var upper= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
  var lower= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numb= [1,2,3,4,5,6,7,8,9,0];
  var symb= ["!","@","#","$","%","^","&","*","(",")","=","+","-","_"];
  var bank= "";

function getUpper() {
var confirmUpper=(Math.floor(Math.random()*upper.length));
var randomUpper = upper[confirmUpper];
return randomUpper;
}

function getLower(){
var confirmLower=(Math.floor(Math.random()*lower.length));
var randomLower = lower[confirmLower];
return randomLower;
}

function getNumber() {
var confirmNumber=(Math.floor(Math.random()*numb.length));
var randomNumber = numb[confirmNumber];
return randomNumber;
}

function getSymbol() {
var confirmSymbol=(Math.floor(Math.random()*symb.length));
var randomSymbol = symb[confirmSymbol];
return randomSymbol;
}

function generatePassword () {
bank= "";
fullBank=""
var length= window.prompt("How long do you want your password(8-128)?");
var parseLength = parseInt(length);

if (parseLength<8 || parseLength >128)  {
  return "Invalid must be 8-128 characters in length";   
}




var upperCase = window.confirm("Click ok if you want uppercase characters?");
var lowerCase = window.confirm ("Click ok if you want lowercase characters?"); 
var numbers = window.confirm ("Click ok if you want numbers?");
var symbols = window.confirm("Click ok if you want symbols?");  
//return (parseLength, upperCase, lowerCase, numbers, symbols);

if (upperCase === true) {
  bank = bank + getUpper();
  fullBank= fullBank.concat(upper);
}

if (lowerCase === true) {
  bank = bank + getLower();
  fullBank= fullBank.concat(lower);
}

if (numbers === true) {
  bank = bank + getNumber();
fullBank= fullBank.concat(numb);
}

if (symbols === true) {
  bank = bank + getSymbol();
fullBank= fullBank.concat(symb);
}

if (upperCase === false && lowerCase === false && numbers === false && symbols === false) {
return "Need more character types"

}
console.log(fullBank)
var startLength =bank.length;
for (i = 0; i<parseLength-startLength; i++)
{
  var confirmBank=(Math.floor(Math.random()*fullBank.length));
var randomChoice = fullBank[confirmBank];
bank= bank + randomChoice;
}
console.log(bank)
return bank
//Help from Phind to randomize the password https://www.phind.com/search?cache=58a5884c-dea1-4e0b-ac6c-9d701c44b4d0

/*function shuffleString(str) {
  var array = str.split('');
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array.join('');
}
return shuffleString(bank).toString()
*/
}

// Write password to the #password input

function writePassword() {  
 
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*do I need something like this?
function copyPassword() {

  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!"); */



