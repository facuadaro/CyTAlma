import { useEffect, useState } from 'react'
import './App.css'
//Importando los modulos de firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)
//Importar componentes
import Login from './home/Login'
import Home from './home/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './home/Register'


function App() {

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if(usuarioFirebase){
        setUsuario(usuarioFirebase)
        console.log(usuarioFirebase)
      }else{
        setUsuario(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={usuario ? <Home correoUsuario={usuario.email}/> : <Navigate to="/login" />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
