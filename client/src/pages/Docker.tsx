import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../components/Container'
import { ContainerProps } from '../components/Container'
import '../styles/Docker.scss'

interface ContainersArray {
    containers: Array<ContainerProps>
}

interface DockerDataProps {
    data: { containers: ContainersArray }
    status: Number
    statusText: String
}

const Docker: React.FC = () => {
    const [containers, setContainers] = useState<ContainersArray | any>([])

    useEffect(() => {
        const getContainers = async () => {
            const response: DockerDataProps = await axios.get('containers/list-containers')
            console.log(response)
            return response.data.containers
        }
        setContainers(getContainers())
    }, [])

    return (
        <>
            <div className="app-main-container">
                <div className="docker-containers">
                    {/* <p>{containers[0]}</p> */}
                    {/* {containers.map((container: ContainerProps) => {
                        return (
                            <Container Id={container.Id} Image={container.Image} Command={container.Command} 
                                Ports={container.Ports} State={container.State} Status={container.Status}/>
                        )
                    })} */}
                </div>
            </div>
        </>
    )
}

export default Docker;