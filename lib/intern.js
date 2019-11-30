class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.school = school;
        this.role = role
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    };
    getEmail() {
        return this.email

    };
    getRole() {
        return this.role
    }
    getSchool() {
        return this.school
    }
    getGithub() {

        return "GitHubUser"

    };

};


let intern = new Intern
intern.getGithub();
module.exports = Intern
