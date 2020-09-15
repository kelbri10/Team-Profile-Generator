const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const startInquiry = () => {

    const questions = [
        {
            type: 'list', 
            name: 'role', 
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name', 
            message: 'What is your name?', 
        },
        {
            type: 'input',
            name: 'employeeID', 
            message: 'What is your id?', 
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is your email?', 
        }, 
    
    ]; 
    
    inquirer.prompt(questions).then(employee=>{
        if (employee.role === 'Manager'){ 
            managerQuestion(employee); 
        } else if (employee.role === 'Engineer'){ 
            engineerQuestion(employee); 
        } else {
            internQuestion(employee); 
        }
    }); 
}

const managerQuestion = employee => { 

    const questions = [
        {
            type: 'input', 
            name: 'number', 
            message: 'What is your office number?' 
        
        }
    ]; 

    inquirer.prompt(questions).then(answer=>{ 
        const manager = new Manager(employee.role, employee.name, employee.employeeID, employee.email, answer); 
        console.log(manager); 
    }); 
} 

const engineerQuestion = employee => { 
    console.log('this person is a engineer'); 

    const questions = [
        {
            type: 'input',
            name: 'github', 
            message: 'What is your github username?', 
        }
    ]

    inquirer.prompt(questions).then(answer =>{ 
        const engineer = new Engineer(employee.role, employee.name, employee.employeeID, employee.email, answer); 
        console.log(engineer); 
    }); 
}

const internQuestion = (employee) => { 
    const question = [
        {
            type: 'input',
            name: 'school', 
            message: 'What school are you currently attending or recently graduated from?', 
        }
    ]; 

    inquirer.prompt(question).then(answer =>{ 
        const intern = new Intern(employee.role, employee.name, employee.employeeID, employee.email, answer); 
        console.log(intern); 
    })
 
}

startInquiry(); 
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
