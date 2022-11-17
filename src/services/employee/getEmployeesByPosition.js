const EmployeeModel = require('../../models/employee.models')

const getEmployeesByPosition = async (req) => {
    const { position } = req.params
    const employees = await EmployeeModel.find({position})
    if (employees.length === 0) throw new Error('Cannot find any employee in the position: ' + position)
    return employees
}

module.exports = getEmployeesByPosition