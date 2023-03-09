import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiChevronDown, mdiPlay, mdiStop } from '@mdi/js';
import "../styles/DockerContainer.scss"

export interface ContainerProps {
    Id: String,
    Image: String,
    Command: String,
    Ports: Object[]
    State: String,
    Status: String,
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    const [expanded, setExpanded] = useState(false);

    const expandHandler = () => expanded ? setExpanded(true) : setExpanded(false)

    return (
        <>
            <div className="docker-container">
                <div className="docker-container-details">
                    <h4>{props.Id}</h4>
                    <p>{props.Image}</p>
                </div>
                <div className={`docker-container-menu ${expanded}`}>
                    <button onClick={() => expandHandler()} className='chevron-button'>
                        <Icon path={mdiChevronDown} size={1} />
                    </button>
                    {expanded && <div className='docker-container-menu-expanded'>
                            <Icon style={{color: "green"}} path={mdiPlay} size={1} />
                            <Icon style={{color: "red"}} path={mdiStop} size={1} /> 
                        </div>}
                </div>
            </div>
        </>
    )
}
 
export default Container;
