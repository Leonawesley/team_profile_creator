const Employee = require("./Employee");

//Manager class extending the Employee parent class

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

//Export the Manager class
module.exports = Manager;