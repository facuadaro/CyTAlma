import React from 'react'
import './Abonos.css'
import AbonoIMG from '../../../../assets/LogoPag.png'

function Abono() {
  return (
    <main className='abonos'>
      <h1>Abonos de reparacion de computadoras</h1>
      <section className='infoservicios'>
        <div className="caja1">
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
        </div>
        <div className='caja2'>
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
          <div className="servicios">
            <img src={AbonoIMG} alt="" className="imgabono"/>
            <h4>VISITAS</h4>
            <p>Visitas contempladas en tu hogar o empresa durante el mes por cualquier tipo de evento</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Abono