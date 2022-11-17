const express = require('express'),
    { body } = require('express-validator'),
    { validator, checkNames, checkPositions } = require('../utils/middleware/validator')

const router = express.Router()
const { getEmployeesController,
    hireEmployeeController,
    hireRandomEmployeeController,
    updateEmployeeController,
    fireEmployeeController
} = require('../controller/employee/employeeControler')
const auth = require('../utils/middleware/auth')

const getPersonMiddleware = require('../utils/middleware/getPersonMiddleware')

/* _-_- ROUTES -_-_ */

router.get('/employees', auth, getEmployeesController)

router.get('/employees/:position',
    auth,
    checkPositions,
    getEmployeesController)

router.post('/employees',
    checkNames,
    checkPositions,
    validator,
    hireEmployeeController)

router.post('/employees/random', getPersonMiddleware, hireRandomEmployeeController)

router.put('/employees/:firstName',
    checkNames,
    checkPositions,
    validator,
    updateEmployeeController)

router.delete('/employees/:firstName', fireEmployeeController)

module.exports = router