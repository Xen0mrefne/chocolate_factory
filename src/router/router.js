const express = require('express'),
    { body } = require('express-validator')

const router = express.Router()
const { getEmployeesController,
    hireEmployeeController,
    hireRandomEmployeeController,
    updateEmployeeController,
    fireEmployeeController
} = require('../controller/employee/employeeControler')

const auth = require('../utils/middleware/auth')
const { checkNames, checkPositions, validator } = require('../utils/middleware/validation')

const getPersonMiddleware = require('../utils/middleware/getPersonMiddleware')

/* _-_- ROUTES -_-_ */

router.get('/employees', getEmployeesController)

router.get('/employees/:position',
    checkPositions,
    getEmployeesController)

router.post('/employees',
    auth,
    checkNames,
    checkPositions,
    validator,
    hireEmployeeController)

router.post('/employees/random', auth, getPersonMiddleware, hireRandomEmployeeController)

router.put('/employees/:firstName',
    auth,
    checkNames,
    checkPositions,
    validator,
    updateEmployeeController)

router.delete('/employees/:firstName', auth, fireEmployeeController)

module.exports = router