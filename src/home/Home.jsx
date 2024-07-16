import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
import './Home.css'
import { Link, Routes, Route } from 'react-router-dom'
import LogoPag from '../assets/LogoARPC.png'
import QuienesSomos from './nav/QuienesSomos'
import Servicios from './nav/Servicios'
import Contacto from './nav/Contacto'
const auth = getAuth(appFirebase)


function Home({ correoUsuario }) {

  return (
    <div className='container'>
      <div className="cabecera">
        <div className='titulo'>Bienvenido usuario {correoUsuario}!</div>
        <button className='logout' onClick={() => {
          signOut(auth)
        }}>Logout</button>
      </div>
      <nav>
        <div className='logo'>
          <Link to='/'><img src={LogoPag} alt="" className='logo' /></Link>
        </div>
        <ul>
          <Link to='/quienesSomos' className='li-individual'>Quienes Somos?</Link>
          <Link to='/servicios' className='li-individual'>Servicios</Link>
          <Link to='/contacto' className='li-individual'>Contacto</Link>
        </ul>
      </nav>
      <main>
        <section>
          <Routes>
            <Route path="/quienesSomos" element={<QuienesSomos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default Home