"use strict";
class addressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(listitem) {
        const index = this.contacts.map(e => e.name).indexOf(listitem)
        this.contacts.splice(index, 1);
    }
    update(listitem, info) {
        const index = this.contacts.map(e => e.name).indexOf(listitem);
        this.contacts.splice(index, 1, info);
    }
    print() {
        console.log(this.contacts);
    }

}
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}
let book = new addressBook();
book.add(new Contact("John", "jvpermaloff@gmail.com", "586-909-6392", "self"))
book.add(new Contact("Jim", "jimmy@gmail.com", "909-586-2936", "friend"))
book.add(new Contact("Jack", "Jack@gmail.com", "248-979-8686", "friend"))
let run = prompt("Would you like to add a new contact, delete a contact, update a contact, print your contacts, or quit?");
while (run.toLowerCase() != "quit") {
    if (run.toLowerCase() == "add") {
        let addName = prompt("Enter the new contact's name");
        let addEmail = prompt(`Enter ${addName}'s Email address`);
        let addPhone = prompt(`Enter ${addName}'s phone number`);
        let addRelation = prompt(`Enter your relation with ${addName}`);
        book.add(new Contact(addName, addEmail, addPhone, addRelation));
        run = prompt("Would you like to add a new contact, delete a contact, update a contact, print your contacts, or quit?");
    }
    if (run.toLowerCase() == "delete") {
        let known = prompt(`Do you know the index position of the person you want to delete?`)
        if (known.toLowerCase() == "yes") {
            let removal = prompt(`What is the index position of the contact you would like to delete?`)
            book.deleteAt(removal);
            run = prompt("Would you like to add a new contact, delete a contact, update a contact, print your contacts, or quit?");
        } else if (known.toLowerCase() == "no") {
            let deleteName = prompt("What is the name of the contact you would like to delete?");
            book.deleteByName(deleteName);
            run = prompt("Would you like to add a new contact, delete a contact, update a contact, print your contacts, or quit?");
        }
    }
    if (run.toLowerCase() == "print") {
        console.log(book);
        run = prompt("Would you like to add a new contact, delete a contact, update a contact, print your contacts, or quit?");
    }
    if (run.toLowerCase() == "update") {
        let oldInfo = prompt("Enter the name of the contact you would like to update")
        let addName = prompt("Enter the contact's new name");
        let addEmail = prompt(`Enter ${addName}'s Email address`);
        let addPhone = prompt(`Enter ${addName}'s phone number`);
        let addRelation = prompt(`Enter your relation with ${addName}`);
        book.update(oldInfo, new Contact(addName, addEmail, addPhone, addRelation));
        run = prompt("Would you like to add a new contact, delete a contact, update a contact, print your contacts, or quit?");
    }
}
