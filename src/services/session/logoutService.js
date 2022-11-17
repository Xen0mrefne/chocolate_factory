const logoutService = (req) => {
    req.session.destroy( err => {
        if (!err) {
            return;
        } else {
            throw new Error({status: "Error on logout", body: err})
        }
    })
}

module.exports = logoutService