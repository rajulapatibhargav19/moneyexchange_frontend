import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/navbar/Home'
import Exchange from './components/navbar/Exchange'
import Help from './components/navbar/Help'
import Login from './components/navbar/Login'
import UserLogin from './components/UserLogin'
import TrustyLogin from './components/TrustyLogin'
import Ptod from './components/Ptod'
import Dtop from './components/Dtop'
import UserDashboard from './components/UserDashboard'
import TrustyDashboard from './components/TrustyDashboard'


function App() {

  return (
   <div>
      <Navbar/>

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/trusty-login" element={<TrustyLogin />}/>
        <Route path='ptod' element = {<Ptod/>}/>
        <Route path='dtop' element = {<Dtop/>}/>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/trusty-dashboard" element={<TrustyDashboard />} />

      </Routes>
   </div>
  )
}

export default App
