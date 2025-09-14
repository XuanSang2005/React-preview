import './App.css'
import { HomePage } from './pages/Homepage'
import { Routes, Route } from 'react-router'

function App() {

  return (
      <Routes>
        <Route path = "/" element = {<HomePage/>} /> 
        <Route path = "checkout" element = {<div>Test checkout page</div>} /> 
      </Routes>
  )
}

export default App
