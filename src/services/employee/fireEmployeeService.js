const EmployeeModel = require('../../models/employee.models')

const fireEmployeeService = async (req) => {
    const { firstName } = req.params
    const response = await EmployeeModel.deleteOne({firstName})
    if (response.deletedCount === 0) throw new Error('Employee ' + firstName + ' not found.')
    return firstName
}

module.exports = fireEmployeeService