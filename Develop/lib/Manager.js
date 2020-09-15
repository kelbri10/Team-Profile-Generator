// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 

class Manager extends Employee { 
    constructor(role, name, employeeID, email, officeNumber){ 
        super(role, name, employeeID, email); 
        this.officeNumber = officeNumber; 
    }

    getOffice(){ 
        return this.officeNumber;
    }
}

module.exports = Manager; 