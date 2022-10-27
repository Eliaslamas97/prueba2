const axios = require('axios')
const router = require('express').Router()

router.get('/', async(req, res) => {
    const { title } = req.query
    try {
        if(title) {
            const search = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=32b0c60c&t=${title}`)
            const searchTitle = JSON.stringify(search.data)
            res.status(200).send(searchTitle)
        }
        const result = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=32b0c60c')
        const results = JSON.stringify(result.data)
        res.status(200).send(results)
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router;