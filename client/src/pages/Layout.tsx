import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import "../styles/Bungalo.scss"

const Layout: React.FC = () => {
    return (
        <>
            <div className="app-container">
                <Navbar/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout