import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Docker from './pages/Docker'
import Layout from './pages/Layout';
import './styles/Bungalo.scss';
import Settings from './pages/Settings';

export const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {}
})

const Bungalo: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}/>} >
            <Route index element={<Docker darkMode={darkMode}/>} />
            <Route path="settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode}/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default Bungalo;
