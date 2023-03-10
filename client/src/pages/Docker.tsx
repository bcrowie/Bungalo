import { SetStateAction, useEffect, useState } from 'react'
import Container from '../components/Container'
import { ContainerProps } from '../components/Container'
import '../styles/Docker.scss'

interface DockerDataProps {
    containers: SetStateAction<ContainerProps[]>
}

const Docker: React.FC = () => {
    const [containers, setContainers] = useState<ContainerProps[]>([])

    const getContainers = async () => {
        await fetch('/containers/list-containers').then(async res => {
            const response: DockerDataProps = await res.json()
            console.log(response)
            setContainers(response.containers)
        })
    }

    useEffect(() => {
        getContainers()
    }, [])

    return (
        <>
            <div className="app-main-container">
                <div className="docker-containers">
                    {containers.map((container: ContainerProps) => {
                        return (
                            <Container Id={container.Id} Image={container.Image} Command={container.Command} 
                                Ports={container.Ports} State={container.State} Status={container.Status}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Docker;