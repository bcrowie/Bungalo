const express = require('express')
const PORT = process.env.PORT || 3001
const app = new express()
const cors = require('cors')
const docker = require('./docker')

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use('/containers', docker)
app.use(cors)

module.exports = app