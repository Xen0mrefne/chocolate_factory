const EmployeeModel = require('../../models/employee.models')

const getEmployeesService = async () => {
    const employees = await EmployeeModel.find()
    if (employees.length === 0) throw new Error('Cannot find any employee. It may be a good idea to hire, hehe')
    return employees
}

module.exports = getEmployeesService