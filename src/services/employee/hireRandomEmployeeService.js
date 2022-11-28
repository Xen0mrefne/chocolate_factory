const EmployeeModel = require('../../models/employee.models')

const hireRandomEmployeeService = async (req) => {

    const { person } = req
    
    const hiredEmployee = new EmployeeModel(person)
    await hiredEmployee.save()
    return person
}

module.exports = hireRandomEmployeeService