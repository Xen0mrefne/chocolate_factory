const express = require('express'),
    { body } = require('express-validator'),
    { validator, checkLength} = require('../utils/validator')

const router = express.Router()
const { getEmployeesController,
    hireEmployeeController,
    hireRandomEmployeeController,
    updateEmployeeController,
    fireEmployeeController
} = require('../controller/employee/employeeControler')

router.get('/employees', getEmployeesController)

router.get('/employees/:firstName', getEmployeesController)

router.post('/employees',
    checkLength,
    validator,
    hireEmployeeController)

router.post('/employees/random', hireRandomEmployeeController)

router.put('/employees/:firstName',
    checkLength,
    validator,
    updateEmployeeController)

router.delete('/employees/:firstName', fireEmployeeController)

module.exports = router