import { useEffect, useState } from 'react'
import Icon from '@mdi/react'
import { mdiCircleMedium, mdiChevronDown, mdiPlay, mdiStop } from '@mdi/js';
import "../../styles/DockerContainer.scss"

export interface ContainerProps {
    Id: string,
    Labels: { "org.opencontainers.image.title": string },
    Names: string,
    State: string,
    Status: string,
}

interface ReqParams {
    Id: string,
    url: string,
    method: string
}

const setParams = (id: string): ReqParams => {
    return {
        Id: id,
        url: `/containers/stop-containers/${id}`,
        method: 'POST'
    }
}



const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if(props.State === "running") setRunning(true)
    }, [props.State])

    const stopContainer = async (id: string) => {
        const response = await fetch(`/containers/stop-container/${id}`)
        if(response.status === 200) setRunning(false)
    }
    
    const startContainer = async (id: string) => {
        console.log(id)
        const response = await fetch(`/containers/start-container/${id}`)
        console.log(response)
        if(response.status === 200) setRunning(true)
    }

    return (
        <>
            <div className="docker-container">
                <div className="docker-container-details">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h4>{props.Labels['org.opencontainers.image.title']}</h4>
                        <Icon style={{color: `${running ? "green" : "red"}`}} path={mdiCircleMedium} size={1} />
                    </div>
                    <p>{props.Status}</p>
                </div>
                <div className={`docker-container-menu ${expanded}`}>
                    <button onClick={() => setExpanded(expanded => !expanded)} className='chevron-button'>
                        <Icon path={mdiChevronDown} size={1} />
                    </button>
                    {expanded && <div className='docker-container-menu-expanded'>
                            <button style={{ cursor: "pointer" }} onClick={() => startContainer(props.Id)}>
                                <Icon style={{color: "green"}} path={mdiPlay} size={1} />
                            </button>
                            <button style={{ cursor: "pointer" }} onClick={() => stopContainer(props.Id)}>
                                <Icon style={{color: "red"}} path={mdiStop} size={1} />
                            </button> 
                        </div>}
                </div>
            </div>
        </>
    )
}
 
export default Container;
