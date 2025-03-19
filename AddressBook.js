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


//UC3
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

// Address Book Array
let addressBook = [];

// Function to Add Contacts
function addContact(contact) {
    addressBook.push(contact);
    console.log("Contact added successfully!");
}

// Testing the functionality
try {
    let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "100001", "9876543210", "abc.xyz@bridgelabz.co.in");
    addContact(contact1);

    let contact2 = new Contact("Alice", "Smith", "456 Elm St", "Los Angeles", "CA", "900001", "8765432109", "abc@bridgelabz.co.us");
    addContact(contact2);
} catch (error) {
    console.error(error);
}

// Displaying the contacts
console.log("Address Book:");
addressBook.forEach(contact => console.log(contact.display()));

//UC4
function editContact(name, updatedContact) {
    let contact = addressBook.find(contact => contact.firstName === name);
    if (contact) {
        Object.assign(contact, updatedContact);
        console.log("Contact updated successfully!");
    } else {
        console.log("Contact not found!");
    }
}

// Example Usage
editContact("John", { city: "Boston", phoneNumber: "9988776655" });

//UC5
function deleteContact(name) {
    let index = addressBook.findIndex(contact => contact.firstName === name);
    if (index !== -1) {
        addressBook.splice(index, 1);
        console.log("Contact deleted successfully!");
    } else {
        console.log("Contact not found!");
    }
}

// Example Usage
deleteContact("Alice");

//UC6
function getContactCount() {
    return addressBook.reduce(count => count + 1, 0);
}

// Example Usage
console.log("Total Contacts: ", getContactCount());

//UC7
function addUniqueContact(contact) {
    if (addressBook.some(existing => existing.firstName === contact.firstName)) {
        console.log("Duplicate Entry! Contact not added.");
    } else {
        addressBook.push(contact);
        console.log("Contact added successfully!");
    }
}

// Example Usage
let contact3 = new Contact("John", "Doe", "789 Pine St", "Miami", "FL", "33101", "9988776655", "abc@bridgelabz.co.in");
addUniqueContact(contact3);

//UC8
function searchByCityOrState(city, state) {
    return addressBook.filter(contact => contact.city === city || contact.state === state);
}

// Example Usage
console.log("Contacts in New York: ", searchByCityOrState("New York", ""));

//UC9
function viewByCityOrState() {
    let groupedByCity = addressBook.reduce((acc, contact) => {
        (acc[contact.city] = acc[contact.city] || []).push(contact);
        return acc;
    }, {});

    console.log("Contacts Grouped by City: ", groupedByCity);
}

// Example Usage
viewByCityOrState();
