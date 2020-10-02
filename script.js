// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Used w3schools.com to help write this section.

var userName = prompt('Do you need a new, secure password?');

// Alert to select which criteria to include in the password

var newpassword = prompt(
  'The criteria for your new password is it must be between 8-128 characters and include: letters (both lowercase and uppercase), numbers and/or symbols. Type okay to acknowledge.'
);
var acknowledge = confirm('Acknowledged!');

// Prompt for the amount of characters in the password.

var userName = prompt(
  'Pick the length of password between 8-128 characters long.'
);
var confirmcharacters = confirm('Good choice!');

// Prompt for the letters in the password.

var userName = prompt(
  'Pick the letters (lowercase and uppercase) in your password.'
);
var confirmletters = confirm('Good choice!');

// Prompt for the numbers in the password.

var userName = prompt('Pick the numbers in your password.');
var confirmnumbers = confirm('Good choice!');

// Prompt for the symbols in the password.

var userName = prompt('Pick the symbols in your password.');
var confirmsymbols = confirm('Good choice!');

console.log(userName);

// Used geekforgeek.com to help write this section.

function generatePassword() {
  var pass = '';
  var str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$!"#$%&()*+,-.:;<=?@[]^_';

  for (i = 8; i <= 128; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  return pass;
}

function gfg_Run() {
  el_down.innerHTML = generateP();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
