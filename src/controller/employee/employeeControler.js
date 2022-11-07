const getEmployeesService = require('../../services/employee/getEmployeesService'),
    getEmployeesByNameService = require('../../services/employee/getEmployeesByNameService'),
    hireEmployeeService = require('../../services/employee/hireEmployeeService'),
    updateEmployeeService = require('../../services/employee/updateEmployeeService'),
    fireEmployeeService = require('../../services/employee/fireEmployeeService')

const getEmployeesController = async (req, res) => {
    try {
        let employees
        if (req.params.name) {
            employees = await getEmployeesByNameService(req)
        } else {
            employees = await getEmployeesService(req)
        }
        res.json(employees)
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
}

const hireEmployeeController = async (req, res) => {
    try {
        const employee = await hireEmployeeService(req)
        res.status(200).json({message: 'New employee hired! Welcome, ' + employee.name})
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
}

const updateEmployeeController = async (req, res) => {
    try {
        const updatedEmployee = await updateEmployeeService(req)
        res.status(200).json({message: 'Employee ' + updatedEmployee + ' updated successfully'})
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
}

const fireEmployeeController = async (req, res) => {
    try {
        const firedEmployee = await fireEmployeeService(req)
        res.json({message: 'Employee ' + firedEmployee + ' has been fired'})
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
}

module.exports = { getEmployeesController, hireEmployeeController, updateEmployeeController, fireEmployeeController }