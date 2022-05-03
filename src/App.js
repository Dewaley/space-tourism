import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import data from './data';

function App() {
  return (
    <Router>
      <div className='min-h-screen overflow-x-hidden text-white font-mono'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination destinations={data.destinations}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
