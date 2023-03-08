import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../components/Container'
import '../styles/Docker.scss'

const summary = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti explicabo quos labore quibusdam id."

interface ContainerInterface {
    Id: String,
    Image: String,
    Command: String,
    Ports: Object[]
    State: String,
    Status: String,
}

interface ReturnDockerData {
    data: ContainerInterface[]
    status: Number
    statusText: String
}

const Docker: React.FC = () => {
    const [containers, setContainers] = useState({})

    const getContainers = async () => {
        const response: ReturnDockerData = await axios.get('containers/list-containers')
        return response
    }

    useEffect(() => {
        setContainers(getContainers())
    }, [])

    return (
        <>
            <div className="app-main-container">
                <div className="docker-containers">
                    <Container name="test" summary={summary} />
                    <Container name="test" summary={summary} />
                    <Container name="test" summary={summary} />
                </div>
            </div>
        </>
    )
}

export default Docker;