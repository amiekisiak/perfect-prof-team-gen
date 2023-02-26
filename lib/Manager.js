const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // add officeNumber as a parameter
        super(name, id, email);
        this.officeNumber = officeNumber; // assign officeNumber to this.officeNumber
        this.title = 'Manager'; 
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
