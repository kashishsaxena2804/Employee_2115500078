//UC 1
const pinCodePattern = /^[1-9][0-9]{5}$/;
const pinCode = "400088";

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}
