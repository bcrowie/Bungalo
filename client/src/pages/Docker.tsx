import { SetStateAction, useEffect, useState } from 'react'
import Icon from '@mdi/react'
import { mdiViewGrid, mdiViewSequential } from '@mdi/js'

import Container from '../components/Container/Container'
import { ContainerProps } from '../components/Container/Container'

import '../styles/Docker.scss'

interface DockerDataProps {
    containers: SetStateAction<ContainerProps[]>
}

interface DockerPageProps {
    darkMode: boolean
}

const Docker: React.FC<DockerPageProps> = (props: DockerPageProps) => {
    const [containers, setContainers] = useState<ContainerProps[]>([])
    const [containerView, setContainerView] = useState("grid")

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
                <div className={`docker-containers ${containerView}`}>
                    {containers.map((container: ContainerProps) => {
                        return (
                            <Container key={container.Id} Id={container.Id} State={container.State} 
                                containerView={containerView} Status={container.Status} Names={container.Names} Labels={container.Labels}/>
                        )
                    })}
                        {containerView === "grid" ? 
                            <button className="container-view-button" onClick={() => setContainerView("sequential")}>
                                <Icon className="view-button" path={mdiViewGrid} size={1} /> 
                            </button>
                            :
                            <button className="container-view-button" onClick={() => setContainerView("grid")}>
                                <Icon className="view-button" path={mdiViewSequential} size={1} />
                            </button>
                            }
                </div>

            </div>
        </>
    )
}

export default Docker;