import Icon from '@mdi/react'
import { mdiChevronDown, mdiChevronUp, mdiCog, mdiPlay, mdiStop } from '@mdi/js';

import { ContainerMenuProps } from './Container';

const ContainerMenu: React.FC<ContainerMenuProps> = (props: ContainerMenuProps) => {

    return (
        <>
            <div className={`docker-container-menu`}>
                <button onClick={() => props.setExpanded(!props.expanded)} className='chevron-button'>
                    {props.expanded ? <Icon path={mdiChevronUp} size={1} /> :
                        <Icon path={mdiChevronDown} size={1} />}
                </button>
                {props.expanded && <div className='docker-container-menu-expanded'>
                    <button style={{ cursor: "pointer" }} onClick={() => props.startContainer(props.Id)}>
                        <Icon style={{color: "green"}} path={mdiPlay} size={1} />
                    </button>
                    <button style={{ cursor: "pointer" }} onClick={() => props.stopContainer(props.Id)}>
                        <Icon style={{color: "red"}} path={mdiStop} size={1} />
                    </button> 
                    <button style={{ cursor: "pointer" }}>
                        <Icon style={{color: "white"}} path={mdiCog} size={0.8} />
                    </button>
                </div>}
            </div>
        </>
    )
}

export default ContainerMenu;