import { SetStateAction, useEffect, useState } from 'react'

import Container from '../components/Container/Container'
import { ContainerProps } from '../components/Container/Container'

import '../styles/Docker.scss'

interface DockerDataProps {
    containers: SetStateAction<ContainerProps[]>
}

const Docker: React.FC = () => {
    const [containers, setContainers] = useState<ContainerProps[]>([])

    const getContainers = async () => {
        await fetch('/containers/list-containers').then(async res => {
            const response: DockerDataProps = await res.json()
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
                            <Container Id={container.Id} State={container.State} Status={container.Status}
                                Names={container.Names} Labels={container.Labels}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Docker;