import { Route, Routes } from 'react-router-dom'
import Docker from './pages/Docker'
import Layout from './pages/Layout';
import './styles/Bungalo.scss';
import Settings from './pages/Settings';

const Bungalo: React.FC = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Docker/>} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
    </div>
  )
}

export default Bungalo;
