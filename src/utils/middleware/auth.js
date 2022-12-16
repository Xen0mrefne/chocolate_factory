const auth = (req, res, next) => {
    if (req.session?.user == 'Manager' && req.session?.admin) {
        return next()
    }
    return res.status(401).send('Auth error')
}  

module.exports = auth