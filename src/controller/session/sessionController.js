const loginService = require("../../services/session/loginService")
const logoutService = require("../../services/session/logoutService")

const loginController = async (req, res) => {
    try {
        const username = await loginService(req)
        res.send('Login success! Welcome, ' + username)
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}

const logoutController = async (req, res) => {
    try {
        logoutService(req)
        res.send('Logged out. See you soon!')
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}

module.exports = {loginController, logoutController}