const Employee = require("./Employee");

//Engineer class extending the Employee parent class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

}

// Export the Engineer class
module.exports = Engineer;