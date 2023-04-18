import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import "../styles/Bungalo.scss"

interface LayoutProps {
    darkMode: boolean,
    setDarkMode(darkMode: boolean): void
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <>
            <div className="app-container" >
                <Navbar darkMode={props.darkMode} 
                setDarkMode={props.setDarkMode} />
                <Outlet/>
            </div>
        </>
    )
}

export default Layout