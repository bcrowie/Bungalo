import { useState } from 'react'

import ContainerDetails from './ContainerDetails'
import ContainerMenu from './ContainerMenu'

import "../../styles/DockerContainer.scss"

export interface ContainerProps {
    Id: string,
    Labels: { "org.opencontainers.image.title": string },
    Names: string,
    State: string,
    Status: string,
    Running?: boolean
}

export interface ContainerMenuProps extends ContainerProps {
    startContainer: (id: string) => {},
    stopContainer: (id: string) => {}
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    const [running, setRunning] = useState(false)

    const stopContainer = async (id: string) => {
        const response = await fetch(`/containers/stop-container/${id}`)
        if(response.status === 200) setRunning(false)
    }
    
    const startContainer = async (id: string) => {
        const response = await fetch(`/containers/start-container/${id}`)
        if(response.status === 200) setRunning(true)
    }

    return (
        <>
            <div className="docker-container">
                <ContainerDetails Labels={props.Labels} State={props.State} Status={props.Status} Running={running} setRunning={setRunning}/>
                <ContainerMenu Id={props.Id} startContainer={startContainer} stopContainer={stopContainer}
                    Labels={props.Labels} Names={props.Names} State={props.State} Status={props.Status} 
                    Running={running} />
            </div>
        </>
    )
}
 
export default Container;
