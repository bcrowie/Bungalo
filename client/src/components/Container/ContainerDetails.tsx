import { useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCircleMedium } from "@mdi/js";

interface ContainerDetailsProps {
    Labels: { "org.opencontainers.image.title": string },
    Names: string[],
    Running: boolean,
    State: string,
    Status: string
    setRunning: React.Dispatch<React.SetStateAction<boolean>>
}

const prepName = (name: string): string => {
    let newName = name[1].toLowerCase() + name.substring(2)
    return newName
}

const ContainerDetails: React.FC<ContainerDetailsProps> = (props: ContainerDetailsProps) => {    

    useEffect(() => {
        if(props.State === "running") props.setRunning(true)
    }, [props])

    return (
        <>
            <div className="docker-container-details-main">
                <img src={require(`../../builtin_icons/${prepName(props.Names[0])}.png`)} alt="icon" style={{width: "48px", height: "48px"}}/>
                <div className="docker-container-details">
                    <div className="container-name">
                        <h5>{prepName(props.Names[0])}</h5>
                        <Icon style={{color: `${props.Running ? "green" : "red"}`}} path={mdiCircleMedium} size={1} />
                    </div>
                    <p>{props.Status}</p>
                </div>
            </div>
        </>
    )
}

export default ContainerDetails;