const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// array to store all team members
const employees = [];

// function to prompt user for information about the development team members
const promptForManager = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the team manager?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the ID of the team manager?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of the team manager?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number of the team manager?",
    },
  ]).then((response) => {
    // create new Manager object with the user's responses and add it to the employees array
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    employees.push(manager);

    // prompt user for information about the next employee
    promptForNextEmployee();
  });
};

// function to prompt user for information about the next employee
const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "I'm done adding employees"],
      },
    ])
    .then((response) => {
      // if user selects Engineer, prompt for Engineer information
      if (response.employeeType === "Engineer") {
        promptForEngineer();
      }
      // if user selects Intern, prompt for Intern information
      else if (response.employeeType === "Intern") {
        promptForIntern();
      }
      // if user is done adding employees, render the page with the employee information
      else {
        buildPage();
      }
    });
};

// function to prompt user for information about an Engineer
const promptForEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Engineer?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the ID of the Engineer?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of the Engineer?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the GitHub username of the Engineer?",
    },
  ]).then((response) => {
    // create new Engineer object with the user's responses and add it to the employees array
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );
    employees.push(engineer);

    // prompt user for information about the next employee
    promptForNextEmployee();
  });
};

// function to prompt user for information about an Intern
const promptForIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Intern?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the ID of the Intern?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of the Intern?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the name of the Intern's school?",
    },
]).then((response) => {
    // create new Intern object with the user's responses and add it to the employees array
    const intern = new Intern(
    response.name,
    response.id,
    response.email,
    response.school
    );
    employees.push(intern);
    // prompt user for information about the next employee
promptForNextEmployee();
});
};

// function to render the HTML file with the employee information
const buildPage = () => {
// use the functionality from page-template.js to generate the team page
const html = render(employees);

// write the HTML to the output file
fs.writeFile(outputPath, html, (err) => {
if (err) {
console.log(err);
} else {
console.log(`Team page generated! Find it here:" ${outputPath}`);
}
});
};

// start the application by prompting for the manager's information
promptForManager();