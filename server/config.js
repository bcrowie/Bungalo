const { Router } = require('express')
const configRoute = new Router()
const fs = require('fs')
const { defaultConfig } = require('./constants')

configRoute.get('/get-config', async (req, res) => {
    const config = await fs.readFile('./config/config.json', 'utf8', 
    (err, data) => err ? err : data)

    if(config) {
        await res.status(200).json(config)
    } else { 
        await res.status(404).json(defaultConfig)
    }
})

// configRoute.post("./config", (req, res) => {
//     const { config } = req.headers.config
// })

module.exports = configRoute