import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
import './Home.css'
import { Link, Routes, Route } from 'react-router-dom'
import Inicio from './nav/Inicio'
import Productos from './nav/Productos'
import Marcas from './nav/Marcas'
import Contacto from './nav/Contacto'
const auth = getAuth(appFirebase)

function Home({ correoUsuario }) {


  return (
    <div className='container'>
      <div className='titulo'>Bienvenido usuario {correoUsuario}!</div>
      <nav>
        <div className='logo'>
          <h1>CyT</h1>
        </div>
        <ul>
          <Link to='/inicio' className='li-individual'>Inicio</Link>
          <Link to='/productos' className='li-individual'>Productos</Link>
          <Link to='/marcas' className='li-individual'>Marcas</Link>
          <Link to='/contacto' className='li-individual'>Contacto</Link>
        </ul>
      </nav>
      <main>
        <section>
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/marcas" element={<Marcas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </section>
        <h1 className='saludo'>HOLA!</h1>
        <p>Estamos contentos de que estes aca</p>
      </main>
      <button className='btn btn-primary' onClick={() => {
        signOut(auth)
      }}>Logout</button>
    </div>
  )
}

export default Home