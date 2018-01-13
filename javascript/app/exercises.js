// Test the first character of a string is uppercase or not.
function testUpper(input) {
	return /^[A-Z].*$/.test(input);

}

// Check a credit card number (format 9999-9999-9999-9999,
// spaces and no delimiter are also accepted
function testCreditCard(input) {
  var regEx = /^(\d{4}[\s|-]?){3}\d{4}$/;
	return regEx.test(input);
}


/*
 * Uppercase (A-Z) and lowercase (a-z) English letters.
 * Digits (0-9). 
 * Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 * Character . ( period, dot or fullstop) provided that it is not 
 * the first or last character and it will not come one after the other.
 * 
 * 
 * */
 
/*
 * Positive Lookahead 		// q(?=u)  	-> q is followed by u
 * Negative Lookahead 		// q(?!u)  	-> q is not followed by u
 * Positive Lookbehind 		// q(?<=u) 	-> q follows u
 * Negative Lookbehind 		// q(?<!u)	-> q does not follow u
 * */


function testEmail(input) {
	// .(?<=\").*
	var regEx = /^(?!\.)([a-z0-9!#$%&'*\/=?^_`{|}~+-]|\.(?![\.@]))+.@[a-z.-]+\.*[a-z0-9]+.(?<=\").*$/i;
	return regEx.test(input);
}

module.exports.testUpper = testUpper;
module.exports.testCreditCard = testCreditCard;
module.exports.testEmail = testEmail;
