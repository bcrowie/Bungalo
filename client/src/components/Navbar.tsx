import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiCog, mdiDocker, mdiMenu } from '@mdi/js'
import '../styles/Navbar.scss'

const Navbar: React.FC = () => {
    const [menuExpanded, setMenuExpanded] = useState(false)

    useEffect(() => {
        if(menuExpanded){
            document.addEventListener('mousedown', (e: MouseEvent) => {
                if((e.target as Element).classList.value !== 'settings-menu'
                    || (e.target as Element).classList.value !== 'menu-item'){
                        setMenuExpanded(false)
                }
            })
        }
    }, [menuExpanded, setMenuExpanded])

    return (
    <>
        <div className="navbar">
            <h2>Bungalo</h2>
            <button className="menu-button" onClick={() => setMenuExpanded(!menuExpanded)}>
                <Icon path={mdiMenu} size={1} />
            </button>
            {menuExpanded && <div className="settings-menu">
                    <ul>
                        <li className="menu-item">
                                <Icon path={mdiDocker} size={1}/>
                                <Link className="page-link" to={'/'}>
                                    Docker
                                </Link>
                        </li>
                        <li className="menu-item">
                                <Icon path={mdiCog} size={1}/>
                                <Link className="page-link" to={'/settings'}>
                                    Settings
                                </Link>
                        </li>
                        <li className="menu-item">
                            About
                        </li>
                        <li className="menu-item">
                            Other
                        </li>
                    </ul>
                </div>}
        </div>
    </>
    )
}

export default Navbar