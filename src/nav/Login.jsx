import React, { useState } from 'react'
import Aguila from '../assets/Logo.png'
import Mujer from '../assets/mujer.png'
import './Login.css'
import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {  Link } from 'react-router-dom'


const auth = getAuth(appFirebase)

function Login() {

  const registrando = null

  const functAutenticacion = async(e) => {
      e.preventDefault()
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
      console.log(correo, contraseña)

      if(registrando){
        try{
          await createUserWithEmailAndPassword(auth, correo, contraseña)
        }catch(error){
          alert("Asegurese que la contraseña tenga mas de 8 caracteres")
        }
      }else{
        try{
            await signInWithEmailAndPassword(auth, correo, contraseña)  
        }catch(error){
            alert("El correo o la contraseña son incorrectos!")
        }
      }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={Mujer} alt="" className='estilo-profile'/>
              <form onSubmit={functAutenticacion}>
                <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email'/>
                <input type="password" placeholder='Contraseña' className='cajatexto' id='password'/>
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
            <img src={Aguila} alt="" className='tamaño-imagen'/>
        </div>
      </div>
    </div>
  )
}

export default Login