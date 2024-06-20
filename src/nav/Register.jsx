import React, { useState } from 'react'
import Aguila from '../assets/Logo.png'
import Mujer from '../assets/mujer.png'
import './Login.css'
import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { Link } from "react-router-dom";

const auth = getAuth(appFirebase)

function Register() {

  const registrando = null

  const functAutenticacion = async(e) => {
      e.preventDefault()
      const nombre = e.target.nombre.value;
      const apellido = e.target.apellido.value;
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
      console.log(correo, contraseña)

      if(registrando){
        try{
          await createUserWithEmailAndPassword(auth, nombre, apellido, correo, contraseña)
        }catch(error){
          alert("Asegurese que la contraseña tenga mas de 8 caracteres")
        }
      }else{
        try{
            await signInWithEmailAndPassword(auth, nombre, apellido, correo, contraseña)  
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
                <input type="text" placeholder='Nombre' className='cajatexto' id='nombre'/>
                <input type="text" placeholder='Apellido' className='cajatexto' id='apellido'/>
                <input type="email" placeholder='Ingresar Email' className='cajatexto' id='email'/>
                <input type="password" placeholder='Contraseña' className='cajatexto' id='password'/>
                <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesión"}</button>
              </form>
              <h4 className='texto'>
                Si ya tienes cuenta
                <Link to="/login" className='btnswitch' >
                  Iniciar Sesion
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

export default Register