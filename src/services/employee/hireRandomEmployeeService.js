const EmployeeModel = require('../../models/employee.models')

const positions = ['Packaging', 'Manufacturing', 'Security', 'Operator']

const randomPosition = () => {
    return positions[Math.floor(Math.random() * 4)]
}

const hireRandomEmployeeService = async (req) => {

    const { person } = req
    
    const hiredEmployee = new EmployeeModel(person)
    await hiredEmployee.save()
    return person
}

module.exports = hireRandomEmployeeService