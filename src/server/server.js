const express = require('express')
const server = express()
const session = require('express-session')
const router = require('../router/router')
const routerSession = require('../router/routerSession')
const { routeError } = require('../utils/middleware/errors')

server.use(express.json())
server.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

server.use('/api', routerSession)
server.use('/api', router)
server.use(routeError)

module.exports = server