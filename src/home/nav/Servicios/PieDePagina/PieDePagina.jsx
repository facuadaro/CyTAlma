import React from 'react'
import './PieDePagina.css'

function PieDePagina () {
    return (
        <main className='piedepaggral'>
            <section className="piedepag">
                <div className="infofinal">
                    <h3>Servicios</h3>
                    <p>Reparacion de pc</p>
                    <p>Formateo de PC</p>
                    <p>Mantenimiento PC</p>
                    <p>Instalacion de impresora</p>
                    <p>Soporte técnico a empresas</p>
                </div>
                <div className="infofinal">
                    <h3>Contacto</h3>
                    <p>📞+54 9 3571-355102</p>
                    <p>✉️ adaroreparacionespc@gmail.com</p>
                    <span>Horario de atención</span>
                    <p>Lunes a Viernes 8 a 20 horas</p>
                </div>
                <div className="infocartel shadow-lg">
                    <h4>Que plan se ajusta mejor a empresa?</h4>
                    <button>Hablar con un experto</button>
                </div>
            </section>
            <footer>
                © Copyright Empresa de Marketing Digital
            </footer>
        </main>
    )
}

export default PieDePagina
