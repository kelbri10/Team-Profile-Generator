// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{ 
    constructor(){ 
        super(); 
        this.officeNumber = officeNumber; 
    }

    getOffice(){ 
        return this.officeNumber; 
    }
}