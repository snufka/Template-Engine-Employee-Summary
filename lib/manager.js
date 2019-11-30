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
    }

};


var github = getGithub()
{
    return "GitHubUser"
};
module.exports = Manager
