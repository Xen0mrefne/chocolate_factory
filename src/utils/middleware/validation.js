const { validationResult } = require('express-validator'),
    { body } = require('express-validator')

const checkNames = [
    body('firstName').isLength({ min: 3}).withMessage('First name must be at least 3 characters long.'),
    body('lastName').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long.')
]

const checkPositions = (req, res, next) => {

    const positions = ['Packaging', 'Manufacturing', 'Security', 'Operator']

    const { position } = req.body

    if (!position) {
        res.json({message: 'A position is required'})
    } else {
        for (const availablePosition of positions) {
        if (availablePosition.toLowerCase() === position.toLowerCase()) {
                return next()
            }
        }
    }

    res.json({message: 'Insert a valid position. Check if the requested position is correct. Available positions: ' + positions.join(', ')})

}

const validator = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array().map(error => error.param + ': ' + error.msg)})
    }
    next()
}

module.exports = {validator, checkNames, checkPositions}