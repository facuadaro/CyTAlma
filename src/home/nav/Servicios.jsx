import React from 'react'
import appFirebase from '../../credenciales'
import Problematica from './Servicios/Problematica/Problematica'
import Planes from './Servicios/Planes/Planes'
import InfoContacto from './Servicios/InfoContacto/InfoContacto'
import Abonos from './Servicios/Abonos/Abonos'
import Reseñas from './Servicios/Reseñas/Reseñas'
import PieDePagina from './Servicios/PieDePagina/PieDePagina'
import { getAuth, signOut } from 'firebase/auth'
import './Servicios.css'
const auth = getAuth(appFirebase)


function Servicios() {
  return (
    <main>
      <Problematica />
      <Planes />
      <InfoContacto />
      <Abonos />
      <Reseñas />
      <PieDePagina />
    </main>
  )
}

export default Servicios