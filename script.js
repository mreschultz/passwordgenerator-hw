// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Alert to select which criteria to include in the password

// Prompt for the length of the password
// Confirm THEN I choose a length of at least 8 characters and no more than 128 characters

// Prompt for character types to include in the password
// Confirm choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// Used w3schools to help write this section.

var userName = prompt('Would you like a new password?');
var newpassword = prompt(
  'I understand my password can be from 8-128 characters long including letters (both lowercase and uppercase), numbers and/or symbols.'
);
var acknowledge = confirm('Thank you!');

var userName = prompt('Pick the amount of characters from in your password.');
var confirmnumbers = confirm('Good choice!');

if (confirmnumbers == null || password == '') {
  txt = 'User cancelled the prompt.';
} else {
  txt =
    'Try again' +
    confirmnumbers +
    'Please enter the amount of characters in your new password';
}

var userName = prompt('Pick the amount of letters from in your password.');
var confirmletters = confirm('Good choice!');

if (confirmletters == null || password == '') {
  txt = 'User cancelled the prompt.';
} else {
  txt =
    'Try again' +
    confirmnumbers +
    'Please enter the amount of numbers in your new password';
}

var userName = prompt('Pick the amount of numbers from in your password.');
var confirmnumbers = confirm('Good choice!');

if (confirmnumbers == null || password == '') {
  txt = 'User cancelled the prompt.';
} else {
  txt =
    'Try again' +
    confirmnumbers +
    'Please enter the amount of numbers in your new password';
}

var userName = prompt('Pick the amount of symbols from in your new password.');
var confirmsymbols = confirm('Good choice!');

if (confirmsymbols == null || password == '') {
  txt = 'User cancelled the prompt.';
} else {
  txt =
    'Try again' +
    confirmsymbols +
    'Enter the amount of symbols in your new password.';
}

console.log(userName);

// Used geekforgeek to help write this section.

function generatePassword() {
  var pass = '';
  var str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$!"#$%&()*+,-.:;<=?@[]^_';

  for (i = 1; i <= 128; i++) {
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
