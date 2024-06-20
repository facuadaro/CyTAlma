import React from 'react'
import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

function Home({correoUsuario}) {
  return (
    <div>Bienvenido usuario {correoUsuario}! <button className='btn btn-primary' onClick={() =>{
        signOut(auth)
    }}>Logout</button></div>
  )
}

export default Home