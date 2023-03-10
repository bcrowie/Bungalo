import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiChevronDown, mdiPlay, mdiStop } from '@mdi/js';
import { ContainerMenuProps } from './Container';

const ContainerMenu: React.FC<ContainerMenuProps> = (props: ContainerMenuProps) => {
    const [expanded, setExpanded] = useState(false)
    
    return (
        <>
            <div className={`docker-container-menu ${expanded}`}>
                <button onClick={() => setExpanded(expanded => !expanded)} className='chevron-button'>
                    <Icon path={mdiChevronDown} size={1} />
                </button>
                {expanded && <div className='docker-container-menu-expanded'>
                    <button style={{ cursor: "pointer" }} onClick={() => props.startContainer(props.Id)}>
                        <Icon style={{color: "green"}} path={mdiPlay} size={1} />
                    </button>
                    <button style={{ cursor: "pointer" }} onClick={() => props.stopContainer(props.Id)}>
                        <Icon style={{color: "red"}} path={mdiStop} size={1} />
                    </button> 
                </div>}
            </div>
        </>
    )
}

export default ContainerMenu;