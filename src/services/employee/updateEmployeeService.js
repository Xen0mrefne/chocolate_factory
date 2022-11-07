const EmployeeModel = require('../../models/employee.models')

const updateEmployeeService = async (req) => {
    const { name } = req.params
    const employeeUpdate = req.body
    const employeeToUpdate = await EmployeeModel.findOne({name})
    employeeToUpdate.name = employeeUpdate.name
    employeeToUpdate.position = employeeUpdate.position
    await employeeToUpdate.save()
    return employeeToUpdate.name
}

module.exports = updateEmployeeService