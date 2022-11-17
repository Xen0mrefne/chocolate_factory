const axios = require('axios')

const getPersonMiddleware = async (req, res, next) => {
    const resPerson = await axios.get("https://randomuser.me/api/")
    if (!resPerson) res.json('Could not get person')
    
    const {first, last} = resPerson.data.results[0].name
    
    const positions = ['Packaging', 'Manufacturing', 'Security', 'Operator']

    const randomPosition = () => {
        return positions[Math.floor(Math.random() * positions.length)]
    }

    req.person = {
        firstName: first,
        lastName: last,
        position: randomPosition()
    }

    return next();
}

module.exports = getPersonMiddleware