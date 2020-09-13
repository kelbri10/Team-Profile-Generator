// TODO: Write code to define and export the Employee class
class Employee { 
    constructor(role, name, employeeID, email){ 
        this.role = role; 
        this.name = name; 
        this.employeeID = employeeID; 
        this.email = email; 
    }
    
    getName(){ 
        return this.name; 
    }

    getID(){ 
        return this.employeeID; 
    }

    getEmail(){ 
        return this.email; 
    }

    getRole(){
        return this.role; 
    }
}