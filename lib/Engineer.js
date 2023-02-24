// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./lib/Employee");

class Engineer extends Engineer {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Engineer;