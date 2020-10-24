var numStr = "1234567890";
var numArray = numStr.split("");
var lowerStr = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerStr.split("");
var upperArray = lowerStr.toUpperCase().split("");
var symbolsStr = "~@#$%^&*_+-=?";
var symbolsArray = symbolsStr.split("");

function askForOptions() {
	var passLength = parseInt(
		prompt("How long do you want your password to be?")
	);
	console.log(passLength);

	var isNum = confirm("ok numbers");
	var isLower = confirm("ok lowercase letters");
	var isUpper = confirm("ok uppercase letters");
	var isSymbols = confirm("ok symbols");

	if (
		isNum === false &&
		isLower === false &&
		isUpper === false &&
		isSymbols === false
	) {
		alert("select one char type");
		return;
	}

	var options = {
		passLength,
		isNum,
		isLower,
		isUpper,
		isSymbols,
	};

	return options;
}

function buildPassword() {
	var options2 = askForOptions();

	var superArray = [];
	results = [];

	if (options2.isNum) {
		superArray = superArray.concat(numArray);
	}

	if (options2.isLower) {
		superArray = superArray.concat(lowerArray);
	}
	if (options2.isUpper) {
		superArray = superArray.concat(upperArray);
	}
	if (options2.isSymbols) {
		superArray = superArray.concat(symbolsArray);
	}
	console.log(superArray);

	for (var i = 0; i < options2.passLength; i++) {
		var index = Math.floor(Math.random() * superArray.length);
		var digit = superArray[index];

		results.push(digit);
		console.log(results);
	}

	return results.join("");
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = buildPassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
