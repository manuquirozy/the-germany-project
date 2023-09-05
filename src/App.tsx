import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HamburgerMenu from './components/HamburgerMenu';
import Berlin from './pages/Berlin';
import Hamburg from './pages/Hamburg';
import Home from './pages/Home';
import Freiburg from './pages/Freiburg';
import Munich from './pages/Munich';
import Nuremberg from './pages/Nuremberg';


function App() {
  return (
    <div className='App'>
      <HamburgerMenu />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berlin" element={<Berlin />} />
          <Route path="/freiburg" element={<Freiburg />} />
          <Route path="/hamburg" element={<Hamburg />} />
          <Route path="/munich" element={<Munich />} />
          <Route path="/nuremberg" element={<Nuremberg />} />
       </Routes>
    </div>
  );
}

export default App;
