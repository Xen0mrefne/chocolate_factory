const { validationResult } = require('express-validator'),
    { body } = require('express-validator') 

const positions = ['Packaging', 'Manufacturing', 'Security', 'Operator']

const checkNames = [
    body('firstName').isLength({ min: 3, max: 20 }).withMessage('First name must be between 3 and 20 characters long.'),
    body('lastName').isLength({ min: 3, max: 20 }).withMessage('Last name must be between 3 and 20 characters long.')
]

const checkPositions = [body('position').isIn(positions.join(",")).withMessage('Insert a valid position. Check if requested position is correct. Available positions: ' + positions)]

const validator = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array().map(error => error.param + ': ' + error.msg)})
    }
    next()
}

module.exports = {validator, checkNames, checkPositions}