import './App.css'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Join from './components/join/Join'
import Plans from './components/plans/Plans'
import Programs from './components/programs/Programs'
import Reasons from './components/reasons/Reasons'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
     < Hero />
     < Programs />
     < Reasons />
     < Plans />
     < Join />
     < Footer />
    </div>
  )
}

export default App
