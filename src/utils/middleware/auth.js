const auth = (req, res, next) => {
    if (req.session?.user == 'Xen0' && req.session?.admin) {
        return next()
    }
    return res.status(401).send('Auth error')
}  

module.exports = auth