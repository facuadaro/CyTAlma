import { useState } from 'react'
import './App.css'
//Importando los modulos de firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)
//Importar componentes
import Login from './nav/Login'
import Home from './nav/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './nav/Register'


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })

  return (
    <BrowserRouter>
      <div>
        {usuario ? <Home correoUsuario={usuario.email}/> : <Login/>}
      </div>
      <Routes>
        <Route path="/registro" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
