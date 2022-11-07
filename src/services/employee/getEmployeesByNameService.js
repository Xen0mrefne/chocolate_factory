const EmployeeModel = require('../../models/employee.models')

const getEmployeesByNameService = (req) => {
    const { name } = req.params
    return EmployeeModel.find({name})
}

module.exports = getEmployeesByNameService