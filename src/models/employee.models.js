const { model, Schema } = require('mongoose')

const employeeSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
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