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
