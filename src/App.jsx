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

import DtopCont from './components/home/DtopCont'
import PtodCont from './components/home/PtodCont'
import GoogleMapCont from './components/home/GoogleMapCont'

import UserDashboard from './components/UserDashboard'
import TrustyDashboard from './components/TrustyDashboard'
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users/")
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
   <div>
      <Navbar/>

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/ptod' element = {<Ptod/>}/>
        <Route path='/dtop' element = {<Dtop/>}/>
        <Route path='/dtopcont' element={<DtopCont/>} />
        <Route path='/ptodcont' element = {<PtodCont/>} />
        <Route path='/mapcont' element={<GoogleMapCont/>} />

        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/trusty-login" element={<TrustyLogin />}/>
        <Route path='ptod' element = {<Ptod/>}/>
        <Route path='dtop' element = {<Dtop/>}/>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/trusty-dashboard" element={<TrustyDashboard />} />


      </Routes>
      <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.phone_number}
          </li>
        ))}
      </ul>
    </div>
   </div>
  )
}

export default App
