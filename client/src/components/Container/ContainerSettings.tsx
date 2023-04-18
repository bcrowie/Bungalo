import '../../styles/ContainerSettings.scss'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

interface ContainerSettingsProps {
    closeWindow(): void
}

const ContainerSettings: React.FC<ContainerSettingsProps> = (props: ContainerSettingsProps) => {
    return (
        <>
            <div className="container-settings">
                <button onClick={() => props.closeWindow()}>
                    <Icon style={{color: "black" }} path={mdiClose} size={1}/>
                </button>
                <h1>Container Settings</h1>
            </div>
        </>
    )
}

export default ContainerSettings