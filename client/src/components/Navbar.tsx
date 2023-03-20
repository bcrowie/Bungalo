import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiCog, mdiDocker } from '@mdi/js'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import '../styles/Navbar.scss'

interface NavbarProps {
    darkMode: boolean,
    setDarkMode(darkMode: boolean): void
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    

    return (
    <>
        <div className="navbar">
            <h2>Bungalo</h2>
            <div className="menu">
                <DarkModeSwitch style={{ padding: "0 10px"}} checked={props.darkMode} 
                  onChange={props.setDarkMode} 
                  size={28} 
                  animationProperties={defaultProperties}/>
                <button>
                    <Link to={'/'}>
                        <Icon path={mdiDocker} size={1.2} />
                    </Link>
                </button>
                <button>
                    <Link to={"/settings"}>
                        <Icon path={mdiCog} size={1.2} />
                    </Link>
                </button>
            </div>
        </div>
    </>
    )
}

export default Navbar

const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: '50%',
        cy: '23%',
      },
      svg: {
        transform: 'rotate(40deg)',
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: '100%',
        cy: '0%',
      },
      svg: {
        transform: 'rotate(90deg)',
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };