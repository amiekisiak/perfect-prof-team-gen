// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Manager extends Employee { //this starter code was shown by the instructor
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
        this.officeNumber = officeNumber;
        this.title = 'Manager'; 
    }
    getGithub() {
        return this.github;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}



module.exports = Manager;