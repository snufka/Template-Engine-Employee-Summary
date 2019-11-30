class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.officeNumber = officeNumber;
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
    };
    getGithub() {

        return this.github

    };


};

let manager = new Manager
manager.getGithub();
module.exports = Manager
