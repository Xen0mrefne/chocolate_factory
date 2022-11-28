const getEmployeesService = require('../../services/employee/getEmployeesService'),
    getEmployeesByPosition = require('../../services/employee/getEmployeesByPosition'),
    hireEmployeeService = require('../../services/employee/hireEmployeeService'),
    hireRandomEmployeeService = require('../../services/employee/hireRandomEmployeeService'),
    updateEmployeeService = require('../../services/employee/updateEmployeeService'),
    fireEmployeeService = require('../../services/employee/fireEmployeeService')

const getEmployeesController = async (req, res) => {
    try {
        let employees;

        if (req.params.position) {
            employees = await getEmployeesByPosition(req)
        } else {
            employees = await getEmployeesService()
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
        res.status(200).json({message: 'New employee hired! Welcome, ' + employee.firstName})
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
}

const hireRandomEmployeeController = async (req, res) => {
    try {
        const employee = await hireRandomEmployeeService(req)
        res.status(200).json({message: 'New employee hired! Welcome, ' + employee.firstName})
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
        res.status(200).json({message: 'Employee ' + firedEmployee + ' has been fired'})
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
}

module.exports = { getEmployeesController, hireEmployeeController, hireRandomEmployeeController, updateEmployeeController, fireEmployeeController }