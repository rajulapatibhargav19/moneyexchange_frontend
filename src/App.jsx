import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/navbar/Home'
import Exchange from './components/navbar/Exchange'
import Help from './components/navbar/Help'
import Login from './components/navbar/Login'
import Ptod from './components/Ptod'
import Dtop from './components/Dtop'

function App() {

  return (
   <div>
      <Navbar/>

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='ptod' element = {<Ptod/>}/>
        <Route path='dtop' element = {<Dtop/>}/>

      </Routes>
   </div>
  )
}

export default App
