import './App.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Reviews from './Components/Reviews';
import Strategy from './Components/Strategy';
import Card from './Components/Card';
import {temp} from './Data/data.js';
function App() {

  return (
    <div>
      <Navbar />
      <Strategy />
      <Reviews />
      <Footer />
       {/* <Card {...temp[0]}/> */}
    </div>
  )
}

export default App
