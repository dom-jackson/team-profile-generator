const Employee = require("./lib/employee");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require("inquirer");
const fs = require("fs");

let managerQuestions = [
    {
        type: "input",
        name: "managerName",
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

let teamMembers = [];

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
    }
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./dist/style.css">
    <title>Team Members</title>
</head>
<body>
    <header> 
        <h1>My Team</h1> 
    </header>
    <section class="team-members">
        ${teamMembers.map(member => `
            <div class="team-member">
                <h2>${member.name} (${member.getRole()})</h2>
                <p>ID: ${member.id}</p>
                <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                ${member instanceof Manager ? `<p>Office Number: ${member.officeNumber}</p>` : ""}
                ${member instanceof Engineer ? `<p>GitHub: <a href="https://github.com/${member.github}">${member.github}</a></p>` : ""}
                ${member instanceof Intern ? `<p>School: ${member.school}</p>` : ""}
            </div>
        `).join("")}
    </section>
</body>
</html>
`;

    fs.writeFile("index.html", htmlTemplate, "utf8", err => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}



async function main() {
    await addManager();
    await addTeamMember();
}

main();

