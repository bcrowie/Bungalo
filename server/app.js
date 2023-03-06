const express = require('express')
const PORT = process.env.PORT || 3001
const app = new express()
const docker = require('./docker')


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use('/containers', docker)


module.exports = app