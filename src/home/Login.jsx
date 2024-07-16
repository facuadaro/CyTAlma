import { useState } from 'react'
import Aguila from '../assets/Logo.png'
import LogoPag from '../assets/LogoConFondo.png'
import './Login.css'
import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'


const auth = getAuth(appFirebase)

function Login() {

  const navigate = useNavigate()
  const [datosfail, setDatosfail] = useState(false)
  const registrando = null

  const functAutenticacion = async (e) => {
    e.preventDefault()
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    console.log(correo, contraseña)
    try {
      await signInWithEmailAndPassword(auth, correo, contraseña)
      navigate('/')
    } catch (error) {
      setDatosfail(!datosfail)
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="cajalogin shadow-lg">
              <img src={LogoPag} alt="" className='estilo-profile' />
              <form onSubmit={functAutenticacion}>
                <label>Ingrese Email</label>
                <input type="text" placeholder='Email' className='cajatexto' id='email' autoComplete='username'/>
                <label>Ingrese Contraseña</label>
                <input type="password" placeholder='Contraseña' className='cajatexto' id='password' autoComplete='current-password'/>
                {datosfail ? <h4 className='datosfail'>Usuario o contraseña incorrectos.</h4> : ""}
                <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesión"}</button>
              </form>
              <h4 className='texto'>
                No tienes cuenta?
                <Link to="/registro" className='btnswitch'>
                  Registrate
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={Aguila} alt="" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  )
}

export default Login