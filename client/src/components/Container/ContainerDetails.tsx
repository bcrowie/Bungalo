import { SetStateAction, useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiCircleMedium } from "@mdi/js";

interface ContainerDetailsProps {
    Labels: { "org.opencontainers.image.title": string },
    Running: boolean,
    State: string,
    Status: string
    setRunning: React.Dispatch<React.SetStateAction<boolean>>
}

const ContainerDetails: React.FC<ContainerDetailsProps> = (props: ContainerDetailsProps) => {    
    useEffect(() => {
        if(props.State === "running") props.setRunning(true)
    }, [props])

    return (
        <>
            <div className="docker-container-details">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h5>{props.Labels['org.opencontainers.image.title']}</h5>
                    <Icon style={{color: `${props.Running ? "green" : "red"}`}} path={mdiCircleMedium} size={1} />
                </div>
                <p>{props.Status}</p>
            </div>
        </>
    )
}

export default ContainerDetails;