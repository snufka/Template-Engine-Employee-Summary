const questions = [
    {
        name: "name",
        message: "Please enter a Team Member Name?"
    },
    {
        name: "id",
        message: "What is the Team Memeber´s Id?"
    },
    {
        name: "mail",
        message: "What is the Team Memeber´s Email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the Team Memeber´s Role in the company?",
        choices: ["Intern", "Engineer"]
    },
    {
        name: "school",
        message: "In which School does the Team Member study?",
        when: function (answers) {
            return answers.role == "Intern";
        }
    },
    {
        name: "github",
        message: "What is the Team Memeber´s GitHub Username?",
        when: function (answers) {
            return answers.role == "Engineer";
        }
    },
    {
        type: "confirm",
        name: "anotherMember",
        message: "Do you want to add another Team Member?",
        default: true
    }
];














