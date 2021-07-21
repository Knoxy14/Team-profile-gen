const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.school = officeNumber;
    }
    getOfficeNumber()
    {
        return this.officeNumber;
    }
    getRole()
    {
        return "Manager";
    }
}

module.exports = Manager;