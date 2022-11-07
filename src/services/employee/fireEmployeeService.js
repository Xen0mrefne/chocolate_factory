const EmployeeModel = require('../../models/employee.models')

const fireEmployeeService = async (req) => {
    const { name } = req.params
    const response = await EmployeeModel.deleteOne({name})
    if (response.deletedCount === 0) throw new Error('Employee ' + name + ' not found.')
    return name
}

module.exports = fireEmployeeService