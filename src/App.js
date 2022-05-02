import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='text-white main-container min-h-screen overflow-x-hidden'>
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
