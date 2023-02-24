// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Manager extends Manager {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Manager;