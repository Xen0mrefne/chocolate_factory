const EmployeeModel = require('../../models/employee.models')

const updateEmployeeService = async (req) => {
    const { firstName } = req.params
    const employeeUpdate = req.body
    const employeeToUpdate = await EmployeeModel.findOne({firstName})
    if (!employeeToUpdate) throw new Error('Employee ' + firstName + ' not found.')
    employeeToUpdate.firstName = employeeUpdate.firstName
    employeeToUpdate.lastName = employeeUpdate.lastName
    employeeToUpdate.position = employeeUpdate.position
    await employeeToUpdate.save()
    return employeeToUpdate.firstName
}

module.exports = updateEmployeeService