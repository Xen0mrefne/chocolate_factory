const EmployeeModel = require('../../models/employee.models')

const hireEmployeeService = async (req) => {
    const employee = req.body
    const hiredEmployee = new EmployeeModel(employee)
    await hiredEmployee.save()
    return employee
}

module.exports = hireEmployeeService