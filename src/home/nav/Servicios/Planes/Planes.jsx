import React from 'react'
import Info from '../../../../assets/ImagenInicio.jfif'
import './Planes.css'

function Planes() {
  return (
    <main className='planesgral'>
      <section className='planes'>
        <h4>PLANES DE SOPORTE DE COMPUTADORAS</h4>
        <h1>Elegí el plan de soporte informático que más se acomode a tu necesidad.</h1>
        <p>Un servicio ideal para mantener el óptimo rendimiento de tus equipos y el mejor resguardo para tu información, con un servicio remoto y en su domicilio.</p>
        <p>Somos especialistas en Pymes en Buenos Aires y Rosario.</p>
      </section>
      <section className='informacionextra'>
        <div className='infoplanes'>
          <img src="" alt="" />
          <div className='infoprincipal'>
            <img src={Info} alt="Info" className='imginfo' />
            <div className='datos'>
              <h3>Planes de reparación de computadoras para Empresas y Particulares.</h3>
              <p>Es la manera más eficiente y económica de mantener los equipos informáticos de tu hogar o negocio en óptimas condiciones, a través de un abono de reparación de computadoras.</p>
              <p>Por un valor fijo mensual, se brinda reparación y soporte a los equipos que necesites e incluso se realizan respaldos de información de manera periódica ya sea en discos locales o a través de la nube (puede tener un valor adicional).</p>
            </div>
          </div>
          <div className='infogenerica'>
            <div className='cajasinfo'>
              <h1>+500</h1>
              <h4>PC reparadas</h4>
              <p>Soporte para diferentes marcas HP, DELL, EXO</p>
            </div>
            <div className='cajasinfo'>
              <h1>+20</h1>
              <h4>Años de experiencia</h4>
              <p>Técnicos con experiencia nos avalan</p>
            </div>
            <div className='cajasinfo'>
              <h1>+5000</h1>
              <h4>Clientes Satisfechos</h4>
              <p>Nuestro trabajo habla por nosotros</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Planes