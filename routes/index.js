const { Router } = require('express')
const result = require('../controllers/getData.js')

const router = Router();

router.use('/', result)

module.exports = router;