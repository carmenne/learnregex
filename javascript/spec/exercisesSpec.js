var exercises = require("../app/exercises.js");

describe("Regular Expression Exercises", function() {
  
	describe("Exercise 1: test that a string starts with an upper case", function() {
		it ("positive tests", function() {
			expect(exercises.testUpper("Abc")).toBe(true, "Abc");
		});

		it ("negative tests", function() {
			expect(exercises.testUpper("abc")).toBe(false, "abc");
		});
	});
  
  
    describe("Exercise 2: test a credit card number", function() {
		it ("positive tests", function() {
			expect(exercises.testCreditCard("1234 5678 9123 4567")).toBe(true, "1234 5678 9123 4567");
			expect(exercises.testCreditCard("1234567891234567")).toBe(true, "1234567891234567");
			expect(exercises.testCreditCard("9999-9999-9999-9999")).toBe(true, "9999-9999-9999-9999");

		});

		it ("negative tests", function() {
			expect(exercises.testCreditCard("a9999-9999-9999-9999")).toBe(false, "a9999-9999-9999-9999");
			expect(exercises.testCreditCard("9999-9999-9999-9999a")).toBe(false, "9999-9999-9999-9999a");
			expect(exercises.testCreditCard("a9999-9999-9999-9999a")).toBe(false, "a9999-9999-9999-9999a");
			expect(exercises.testCreditCard("1234 5678 9123 456")).toBe(false, "1234 5678 9123 456");
			expect(exercises.testCreditCard("123456789123456_7")).toBe(false, "123456789123456_7");
			expect(exercises.testCreditCard("1234 5678 9123 a56")).toBe(false, "1234 5678 9123 a56");
		});
	});

	describe("Exercise 3: valid email address", function() {
		it ("positive tests", function() {

			expect(exercises.testEmail("prettyandsimple@example.com")).toBe(true, "prettyandsimple@example.com");
			expect(exercises.testEmail("very.common@example.com")).toBe(true, "very.common@example.com");
			expect(exercises.testEmail("disposable.style.email.with+symbol@example.com")).toBe(true, "disposable.style.email.with+symbol@example.com");
			expect(exercises.testEmail("other.email-with-dash@example.com")).toBe(true, "other.email-with-dash@example.com");
			expect(exercises.testEmail("fully-qualified-domain@example.com")).toBe(true, "fully-qualified-domain@example.com");
			expect(exercises.testEmail("user.name+tag+sorting@example.com")).toBe(true, "user.name+tag+sorting@example.com");
			expect(exercises.testEmail("x@example.com")).toBe(true, "x@example.com");
			expect(exercises.testEmail("admin@mailserver1")).toBe(true, "admin@mailserver1");
			expect(exercises.testEmail("example@s.solutions")).toBe(true, "example@s.solutions");
			expect(exercises.testEmail("user@localserver")).toBe(true, "user@localserver");
			expect(exercises.testEmail('"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com')).toBe(true, '"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com');
			expect(exercises.testEmail("#!$%&'*+-/=?^_`{}|~@example.org\"()<>[]:,;@\\\"!#$%&'-/=?^_`{}| ~.a\"@example.org")).toBe(true, "#!$%&'*+-/=?^_`{}|~@example.org\"()<>[]:,;@\\\"!#$%&'-/=?^_`{}| ~.a\"@example.org");
			expect(exercises.testEmail("example-indeed@strange-example.com")).toBe(true, "example-indeed@strange-example.com");

/*
			expect(exercises.testEmail("user@[2001:DB8::1]")).toBe(true, "user@[2001:DB8::1]");
*/


		});

		it ("negative tests", function() {
			expect(exercises.testEmail("Abc.example.com")).toBe(false, "Abc.example.com");
			expect(exercises.testEmail("A@b@c@example.com")).toBe(false, "A@b@c@example.com");
			expect(exercises.testEmail('a"b(c)d,e:f;g<h>i[j\k]l@example.com')).toBe(false, 'a"b(c)d,e:f;g<h>i[j\k]l@example.com');
			expect(exercises.testEmail('just"not"right@example.com')).toBe(false, 'just"not"right@example.com');
			expect(exercises.testEmail('this is"not\allowed@example.com')).toBe(false, 'this is"not\allowed@example.com');
			expect(exercises.testEmail('this\ still\"not\\allowed@example.com')).toBe(false, 'this\ still\"not\\allowed@example.com');			
			expect(exercises.testEmail("john..doe@example.com")).toBe(false, "john..doe@example.com");			
			expect(exercises.testEmail('"very.unusual.@.unusual.com"@example.com')).toBe(false, '"very.unusual.@.unusual.com"@example.com');
			expect(exercises.testEmail(".Abc@example.com")).toBe(false, ".Abc@example.com");
/*
			// too long
			expect(exercises.testEmail("1234567890123456789012345678901234567890123456789012345678901234+x@example.com")).toBe(false, "1234567890123456789012345678901234567890123456789012345678901234+x@example.com");

			expect(exercises.testEmail("example@localhost")).toBe(false, "example@localhost");
			expect(exercises.testEmail("john.doe@example..com")).toBe(false, "john.doe@example..com");			
			expect(exercises.testEmail('" "@example.org')).toBe(false, '" "@example.org');

*/
			expect(exercises.testEmail("Duy")).toBe(false, "Duy");


		});
	});


});
