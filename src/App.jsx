import './App.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import MarketC from './Components/MarketC';
function App() {

  return (
    <div className='flex flex-col w-full h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<Marketplace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
