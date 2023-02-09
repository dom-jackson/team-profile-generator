const Employee = require("./lib/employee");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require("inquirer");

let managerQuestions;
let teamMembers = [];

managerQuestions = [
    {
        type: "input",
        name: "managerNamee",
        message: "What is the team Manager's name?"
    },
    {
        type: "input",
        name: "managerID",
        message: "What is the team Manager's ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team Manager's Email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team Manager's office number?"
    },
]; 
const teamMemberQuestions = [
    {
        type: "list",
        name: "teamMembers",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"]
    } 
];

async function addManager() {
    const managerResponse = await inquirer.prompt(managerQuestions);
    const manager = new Manager(
        managerResponse.managerName,
        managerResponse.managerID,
        managerResponse.managerEmail,
        managerResponse.officeNumber,
    );
    teamMembers.push(manager);
};

async function addTeamMember() {
    const teamMemberResponse = await inquirer.prompt(teamMemberQuestions);
    switch (teamMemberResponse.teamMembers) {
        case "Engineer":
            const engineerResponse = await inquirer.prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the engineer's name?"
                },
                {
                    type: "input",
                    name: "engineerID",
                    message: "What is the engineer's ID?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the engineer's email?"
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's GitHub username?"
                }
            ]);
            const engineer = new Engineer(
                engineerResponse.engineerName,
                engineerResponse.engineerID,
                engineerResponse.engineerEmail,
                engineerResponse.github
            );
            teamMembers.push(engineer);
            addTeamMember();
            break;
            case "Intern":
                const internResponse = await inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "What is the intern's name?"
                    },
                    {
                        type: "input",
                        name: "internID",
                        message: "What is the intern's ID?"
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is the intern's email?"
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "What is the Intern's School?"
                    },
                ]);
                const intern = new Intern(
                    internResponse.internName,
                    internResponse.internID,
                    internResponse.internEmail,
                    internResponse.internSchool,
                );
                teamMembers.push(intern);
                addTeamMember();
                break;
                case "I don't want to add any more team members":
                    console.log("Thank you for using the team builder!");
                    return;
                default:
                    console.log("Invalid option selected");
                    addTeamMember();
                    break;
    }
        
}

async function main() {
    await addManager();
    await addTeamMember();
}

main();

        