// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'

const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Employee constructors are name, id, email
        super(name, id, email);

        // Constructors unique to Intern
        this.school = school;
        // Override "Employee" role from parent Employee class
        this.role = "Intern";
    }
    
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;