import './App.css';
import { Home } from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='h-screen background'>
      <div className='mx-24 h-screen'>
        <Navbar/>
        <Home/>
      </div>
    </div>
  )
}

export default App;
