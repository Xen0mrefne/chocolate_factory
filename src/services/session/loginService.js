const loginService = (req) => {
    const {username, password} = req.query
    if (username !== 'Manager' || password !== 'chocolate') throw new Error("Username or password are incorrect!")
    
    req.session.user = username
    req.session.admin = true

    return username
}

module.exports = loginService