const express = require('express')
const app = express();
const routes = require('./routes/index.js')

const PORT = 3000;

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`)
})