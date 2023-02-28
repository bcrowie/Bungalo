const express = require('express')

const PORT = process.env.PORT || 3001
const app = express()

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get('/containers', (req, res) => {
    res.status(200).json({message: "Containers Here"})
})


