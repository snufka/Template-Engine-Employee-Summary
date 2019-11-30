class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getRole() { return "Engineer" };

}

let engineer = new Engineer
engineer.getGithub();
module.exports = Engineer