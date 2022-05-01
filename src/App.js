import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='bg-home-desktop text-white bg-fixed p-14'>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
