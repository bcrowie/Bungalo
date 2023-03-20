const { Router } = require('express')
const configRoute = new Router()
const fs = require('fs')
const defaultConfig = require('./constants')

configRoute.get('/get-config', async (req, res) => {
    const config = await fs.readFile('./config/config.json', 'utf8', 
    (err, data) => err ? err : data)

    if(config) {
        await res.status(200).json(config)
    } else { 
        await res.status(404).json(defaultConfig)
    }
})

configRoute.post("/set-config", async (req, res) => {
    const { config } = await req.headers
    await fs.writeFile(__dirname +'/config/config.json', config, 'utf8', (err) => 
    err ? console.log(err) : console.log("File written successfully"))

    
})

module.exports = configRoute