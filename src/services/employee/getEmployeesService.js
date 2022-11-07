const EmployeeModel = require('../../models/employee.models')

const getEmployeesService = async () => {
    return EmployeeModel.find()
}

module.exports = getEmployeesService