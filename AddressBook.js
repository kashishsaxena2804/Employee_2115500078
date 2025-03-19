//UC1
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    display() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Example Usage
let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "9876543210", "john.doe@example.com");
console.log(contact1.display());

//UC2
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw "Invalid First Name!";
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw "Invalid Last Name!";
        if (!/^[A-Za-z0-9\s]{4,}$/.test(address)) throw "Invalid Address!";
        if (!/^[A-Za-z\s]{4,}$/.test(city)) throw "Invalid City!";
        if (!/^[A-Za-z\s]{4,}$/.test(state)) throw "Invalid State!";
        if (!/^\d{6}$/.test(zip)) throw "Invalid Zip!";
        if (!/^\d{10}$/.test(phoneNumber)) throw "Invalid Phone Number!";
        if (!/^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/.test(email)) throw "Invalid Email!";

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    display() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Testing the validation
try {
    let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "100001", "9876543210", "abc.xyz@bridgelabz.co.in");
    console.log(contact1.display());
} catch (error) {
    console.error(error);
}

try {
    let contact2 = new Contact("jo", "doe", "123", "NY", "NY", "12345", "12345", "john@example.com");
    console.log(contact2.display()); // Should throw an error
} catch (error) {
    console.error(error);
}
