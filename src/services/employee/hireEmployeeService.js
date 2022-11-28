const EmployeeModel = require('../../models/employee.models')

const hireEmployeeService = async (req) => {
    const employee = req.body
    const {firstName} = employee
    const alreadyEmployee = await EmployeeModel.find({firstName})

    if (alreadyEmployee) throw new Error("This employee already exists.")

    const hiredEmployee = new EmployeeModel(employee)
    await hiredEmployee.save()
    return employee
}

module.exports = hireEmployeeService