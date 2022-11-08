const EmployeeModel = require('../../models/employee.models')

const getEmployeesByNameService = async (req) => {
    const { firstName } = req.params
    const employees = await EmployeeModel.find({firstName})
    if (employees.length === 0) throw new Error('Cannot find any employee with the name ' + firstName)
    return employees
}

module.exports = getEmployeesByNameService