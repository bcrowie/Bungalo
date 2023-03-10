import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiCog, mdiDocker, mdiMenu } from '@mdi/js'
import '../styles/Navbar.scss'

const Navbar: React.FC = () => {
    const [menuExpanded, setMenuExpanded] = useState<boolean>(false)

    return (
    <>
        <div className="navbar">
            <h2>Bungalo</h2>
            <button className="menu-button" onClick={() => setMenuExpanded(!menuExpanded)}>
                <Icon path={mdiMenu} size={1} />
            </button>
            {menuExpanded && <div className="settings-menu">
                    <ul>
                        <li><Icon path={mdiDocker} size={1}/><Link to={'/'}>Docker</Link></li>
                        <li><Icon path={mdiCog} size={1}/><Link to={'/settings'}>Settings</Link></li>
                        <li>About</li>
                        <li>Other</li>
                    </ul>
                </div>}
        </div>
    </>
    )
}

export default Navbar