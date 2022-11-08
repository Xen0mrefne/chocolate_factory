const { model, Schema } = require('mongoose')

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."],
        unique: false
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        unique: false
    },
    position: {
        type: String,
        required: [true, "Position is required."],
        unique: false
    },
    hired_date: {
        type: Date,
        default: Date.now
    }
})

const EmployeeModel = model('Employee', employeeSchema)

module.exports = EmployeeModel 