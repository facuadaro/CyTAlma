import React from 'react'
import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

function Productos() {
  return (
    <div>
      <h1>PRODUCTOS!!!</h1>
    </div>
  )
}

export default Productos