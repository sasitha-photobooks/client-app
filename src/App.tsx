import './App.css';
import { Home } from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='h-screen background overflow-auto overscroll-auto'>
      <div className='mx-3 md:mx-16 lg:mx-24 h-screen'>
        <Navbar/>
        <Home/>
        <div className='h-10'/>
      </div>
    </div>
  )
}

export default App;
