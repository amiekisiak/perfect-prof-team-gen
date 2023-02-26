// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) { // and whatever else is necessary
        super(name, id, email, school);
        this.github = github;
    
}

// Define a method to return school of the intern
getSchool() {
  return this.school;
}

// Override the parent class method to return the role of the intern
getRole() {
  return "Intern";
}
}




module.exports = Engineer;