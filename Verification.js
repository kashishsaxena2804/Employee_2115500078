//PIN CODE UC 1
const pinCodePattern = /^.{6}$/; 
const pinCode = "4A0088"; 

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}


//PIN CODE UC2
const pinCodePattern = /^[1-9][0-9]{5}$/;
const pinCode = "A400088";

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}

//PIN CODE UC3
const pinCodePattern = /^[0-9]{5}[0-9]$/; // Ensures exactly 6 digits
const pinCode = "400088B"; // Test case

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}

//PIN CODE UC4 
const pinCodePattern = /^[0-9]{3}\s?[0-9]{3}$/; // Allows optional space
const pinCode = "400 088"; // Test case

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}

//Email UC1
using System;
using System.Text.RegularExpressions;

class EmailValidator
{
    public static bool ValidateEmail(string email)
    {
        string pattern = @"^abc@bridgelabz\.co(\.in)?$";
        return Regex.IsMatch(email, pattern);
    }

    static void Main()
    {
        string email = "abc@bridgelabz.co.in";
        Console.WriteLine(ValidateEmail(email) ? "Valid Email" : "Invalid Email");
    }
}

//Email UC2
const emailRegex = /^abc@bridgelabz$/;

const testEmails = [
    "abc@bridgelabz",   // Valid
    "abc@xyz",          // Invalid
    "xyz@bridgelabz",   // Invalid
    "abc.bridgelabz"    // Invalid (missing @)
];

testEmails.forEach(email => {
    console.log(`${email}: ${emailRegex.test(email)}`);
});

//Email UC3
const emailRegex = /^abc@bridgelabz\.co$/;

const testEmails = [
    "abc@bridgelabz.co",    // Valid
    "abc@bridgelabzcom",    // Invalid (missing . before co)
    "abc@xyz.co",           // Invalid (wrong domain)
    "abc@bridgelabz.",      // Invalid (missing co after .)
    "abc@bridgelabz.co.in"  // Invalid (optional part not handled yet)
];

testEmails.forEach(email => {
    console.log(`${email}: ${emailRegex.test(email)}`);
});

//Email UC4
const emailRegex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-z]{2,})?$/;

const testEmails = [
    "abc@bridgelabz.co",         // Valid
    "abc.xyz@bridgelabz.co.in",  // Valid (xyz part included)
    "abc-xyz@bridgelabz.co",     // Valid (- used)
    "abc+xyz@bridgelabz.co.us",  // Valid (+ used, .us optional part)
    "abc@bridgelabzcom",         // Invalid (missing . before co)
    "abc@xyz.co",                // Invalid (wrong domain)
    "abc#xyz@bridgelabz.co",     // Invalid (# not allowed)
    "abc..xyz@bridgelabz.co",    // Invalid (double dots)
];

testEmails.forEach(email => {
    console.log(`${email}: ${emailRegex.test(email)}`);
});

//Email UC5
const emailRegex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

const testEmails = [
    "abc@bridgelabz.co",         // Valid
    "abc.xyz@bridgelabz.co.in",  // Valid (xyz part + country code)
    "abc-xyz@bridgelabz.co.us",  // Valid (- used, .us optional part)
    "abc+xyz@bridgelabz.co",     // Valid (+ used, no country code)
    "abc@bridgelabz.com",        // Invalid (wrong domain)
    "abc@bridgelabz.co.in.us",   // Invalid (extra country code)
    "abc..xyz@bridgelabz.co",    // Invalid (double dots)
    "abc#xyz@bridgelabz.co",     // Invalid (# not allowed)
];

testEmails.forEach(email => {
    console.log(`${email}: ${emailRegex.test(email)}`);
});
