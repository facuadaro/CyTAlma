import React from 'react'
import Problematica1 from '../../../../assets/Imagenes/imagenProblematica1.jpg'
import './Problematica.css'

function Problematica() {
  return (
    <main>
        <section className='problematica'>
        <div className='problematicainfo'>
          <h3>Particulares - Empresas</h3>
          <h1>¿Tenés problemas con tus computadoras?</h1>
          <p>Tenemos mas de 20 años de experiencia arreglando y manteniendo computadoras de empresas y profesionales en Buenos Aires y Rosario , conocenos!</p>
          <button>Ver Planes</button>
        </div>
        <img src={Problematica1} alt="" />
        </section>
    </main>
  )
}

export default Problematica