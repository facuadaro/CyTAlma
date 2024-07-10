import React from 'react'
import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)


function Marcas() {
  return (
    <div>
      <h1>MARCAS!!!</h1>
    </div>
  )
}

export default Marcas