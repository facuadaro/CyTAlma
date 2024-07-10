import React from 'react'
import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

function Contacto() {
  return (
    <div>
      <h1>CONTACTO!!!</h1>
    </div>
  )
}

export default Contacto