import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='min-h-screen overflow-x-hidden text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
