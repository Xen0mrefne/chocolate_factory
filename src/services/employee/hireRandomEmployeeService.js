const EmployeeModel = require('../../models/employee.models')
const axios = require('axios')

const positions = ['Packaging', 'Manufacturing', 'Security', 'Operator']

const randomPosition = () => {
    return positions[Math.floor(Math.random() * 4)]
}

const hireRandomEmployeeService = async () => {
    const resPerson = await axios.get("https://randomuser.me/api/"),    
        {first, last} = resPerson.data.results[0].name

    const newEmployee = {
        firstName: first,
        lastName: last,
        position: randomPosition()
    }
    
    const hiredEmployee = new EmployeeModel(newEmployee)
    await hiredEmployee.save()
    return newEmployee
}

module.exports = hireRandomEmployeeService