//UC 1
const pinCodePattern = /^.{6}$/; 
const pinCode = "4A0088"; 

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}


//UC2
const pinCodePattern = /^[1-9][0-9]{5}$/;
const pinCode = "A400088";

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}

//UC3
const pinCodePattern = /^[0-9]{5}[0-9]$/; // Ensures exactly 6 digits
const pinCode = "400088B"; // Test case

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}

//UC4 
const pinCodePattern = /^[0-9]{3}\s?[0-9]{3}$/; // Allows optional space
const pinCode = "400 088"; // Test case

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}
