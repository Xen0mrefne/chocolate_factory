const express = require('express')
const router = express.Router()
const { getEmployeesController, hireEmployeeController, updateEmployeeController, fireEmployeeController } = require('../controller/employee/employeeControler')

router.get('/employees', getEmployeesController)
router.get('/employees/:name', getEmployeesController)
router.post('/employees', hireEmployeeController)
router.put('/employees/:name', updateEmployeeController)
router.delete('/employees/:name', fireEmployeeController)

module.exports = router