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
