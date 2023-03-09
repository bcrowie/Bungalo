import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiCog } from '@mdi/js'
import '../styles/Navbar.scss'

const Navbar: React.FC = () => {
    const [menuExpanded, setMenuExpanded] = useState(false)

    return (
    <>
        <div className="navbar">
            <h2>Bungalo</h2>
            <button className="menu-button" onClick={() => setMenuExpanded(!menuExpanded)}>
                <Icon path={mdiCog} size={1.5} />
            </button>
            {menuExpanded && <div className="settings-menu">
                    <ul>
                        <li>Settings</li>
                        <li>About</li>
                        <li>Other</li>
                    </ul>
                </div>}
        </div>
    </>
    )
}

export default Navbar