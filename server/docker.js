const { Router } = require('express')
const containersRoute = new Router()
const Docker = require('dockerode')
const socket = '/var/run/docker.sock' || process.env.DOCKERSOCK

const docker = new Docker({socketPath: socket})
// const docker = new Docker({ host: "10.10.100.200", port: 2375 })

const containerNotFound = (id) => {
    return `Container ${id} not found.`
}

containersRoute.get('/list-containers', async (req, res) => {
    const containers = await docker.listContainers({ all: true })
    await res.status(200).json({ containers })
})

containersRoute.get('/start-container/:container', async (req, res) => {
    const containerId = req.params.container
    const container = docker.getContainer(containerId)

    if(container) {
        container.start((err, data) => {
            if(err) console.log(err)
            else console.log(data)
        })
        await res.status(200).json({ message: `Started container ${containerId}`})
    } else {
        await res.status(404).json({ message: containerNotFound(containerId)})
    }
})

containersRoute.get('/stop-container/:container', async (req, res) => {
    const containerId = req.params.container
    const container = docker.getContainer(containerId)

    if (container) {
        container.stop((err, data) => {
            if(err) console.log(err)
            else console.log(data)
        })
        await res.status(200).json({ message: `Stopped container ${containerId}.`})
    } else {
        await res.status(404).json({ message: containerNotFound(containerId)})
    }
    
})

module.exports = containersRoute;