import axios from 'axios'

interface Container {
    Id: String,
    Image: String,
    Command: String,
    Ports: Object[]
    State: String,
    Status: String,
}

interface ContainerList {
    data: Container[]
    status: Number
    statusText: String
}

const Docker: React.FC = () => {

    const clickHandler = async () => {
        const response: ContainerList = await axios.get('/containers/list-containers')
        console.log(response)
    }

    return (
        <>
            <div className="app-main-container">
                <h1>Test</h1>
                <button onClick={() => clickHandler()}>Click me</button>
            </div>
        </>
    )
}

export default Docker;