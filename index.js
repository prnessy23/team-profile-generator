// link to create HTML page
const generateHTML = require("./src/generateHTML");

// creation of team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

addManager();

function addManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter manager`s name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter manager`s ID!",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager`s ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter manager`s email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter manager`s office number.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter office number.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, managerEmail, officeNumber } = managerInput;
      const manager = new Manager(name, id, managerEmail, officeNumber);

      teamArray.push(manager);
      console.log(manager);
      addEmployee();
    });
}
const addEmployee = () => {
  console.log(`
------------------------- 
-------------------------
Adding employees to the team
    `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter employee's ID.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        // validate: (email) => {
        //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        //   if (valid) {
        //     return true;
        //   } else {
        //     console.log("Please enter an email.");
        //     return false;
        //   }
        // },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github user name?",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's github user name.");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school.",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter intern's school.");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // Employee types defined
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        writeFile();
      }
    });
};

const writeFile = () => {
  console.log(teamArray);
  fs.writeFile("team.html", generateHTML(teamArray), (err) => {
    if (err) throw err;
    console.log(
      "Your team profile has been created? Please check out the index.html"
    );
  });
};
