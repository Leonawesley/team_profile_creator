const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let team = [];

startProgram();

//Intial prompt to gather manager information
function startProgram(){

    //Inquirer function to get information about the manager
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the manager?",
          default: () => {
            return "John Doe";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the manager's employee ID?",
          default: () => {
            return 11111;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the manager's email address?",
          default: () => {
            return "johndoe@gmail.com";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's Office Number?",
          default: () => {
            return 022002200220;
          },
        },
      ])
      //Creating new manager instance
      .then((managerDetail) => {
        const newManager = new Manager(
            managerDetail.name,
            managerDetail.id,
            managerDetail.email,
            managerDetail.officeNumber
        );
        // Pushing the manager instances into the team array
        team.push(newManager);
        //To display the menu options
        menu();
      });
  }
  
//Function to give options to choose between intern or engineer
function menu() {
    // Gives the menu options to the users
    inquirer
      .prompt({
        type: "list",
        name: "options",
        message: "What do you want to do next?",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
      })
      .then((choice) => {
        switch (choice.options) {
          case "Add an engineer":
            addEngineer();
            break;
          case "Add an intern":
            addIntern();
            break;
          default:
            buildTeam();
            break;
        }
      });
  }

  // Function to get Engineer information
  function addEngineer() {
    // Inquirer function to get user information about the engineer
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the engineer?",
          default: () => {
            return "Paul wesley";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's employee ID?",
          default: () => {
            return 22222;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
          default: () => {
            return "paulwesley@engineer.com";
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's github username?",
          default: () => {
            return "paulWesley";
          },
        },
      ])
      //Creating a new instance for the engineer class
      .then((engineerDetails) => {
        const newEngineer = new Engineer(
            engineerDetails.name,
            engineerDetails.id,
            engineerDetails.email,
            engineerDetails.github
        );
        // Push the prompt information to the team array
        team.push(newEngineer);
        // Back to the menu
        menu();
      });
  }
  
  // Function to add intern
  function addIntern() {
    // Inquirer function to get user information about the intern
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the intern?",
          default: () => {
            return "Leona";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the interns's employee ID?",
          default: () => {
            return 33333;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the interns's email address?",
          default: () => {
            return "leona@example.com";
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is the name of the intern's School?",
          default: () => {
            return "London university";
          },
        },
      ])
      // Creating a new instance for the intern class
      .then((internDetail) => {
        const newIntern = new Intern(
            internDetail.name,
            internDetail.id,
            internDetail.email,
            internDetail.school
        );
        // Pushing the intern instance into the team array 
        team.push(newIntern);
        //Back to the menu
        menu();
      });
  }
  
  //
  function buildTeam() {
    // Check if the directory already exists, if not create a new directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    // Render the team to the html page using the render function
    fs.writeFileSync(outputPath, render(team), "utf8");
  }
