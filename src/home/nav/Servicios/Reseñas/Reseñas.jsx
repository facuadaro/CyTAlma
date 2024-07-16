import React from 'react'
import './Reseñas.css'
import ReseñaIMG from '../../../../assets/LogoPag.png'

function Reseñas() {
  return (
    <main className='reseñas'>
      <h1>Qué dicen nuestros clientes</h1>
      <div className='comentarios'>
        <div className='comentariosindividuales'>
          <img src={ReseñaIMG} alt="" className="reseñaimg"/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ducimus sint, reiciendis impedit laborum in facere repudiandae perspiciatis ut voluptas tempore provident id quisquam, praesentium excepturi ad neque est minus modi earum quos corporis illum expedita!.</p>
          <div className='barra'>-</div>
          <h3>Adriana Gonzales</h3>
          <p>scorza</p>
        </div>
        <div className='comentariosindividuales'>
          <img src={ReseñaIMG} alt="" className="reseñaimg"/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ducimus sint, reiciendis impedit laborum in facere repudiandae perspiciatis ut voluptas tempore provident id quisquam.</p>
          <div className='barra'>-</div>
          <h3>Adriana Gonzales</h3>
          <p>scorza</p>
        </div>
        <div className='comentariosindividuales'>
          <img src={ReseñaIMG} alt="" className="reseñaimg"/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ducimus sint, reiciendis impedit laborum in facere repudiandae perspiciatis ut voluptas tempore provident id quisquam, praesentium excepturi ad neque est minus modi earum quos corporis illum expedita! At tempore..</p>
          <div className='barra'>-</div>
          <h3>Adriana Gonzales</h3>
          <p>scorza</p>
        </div>
      </div>
    </main>
  )
}

export default Reseñas