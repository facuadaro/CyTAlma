import Aguila from '../assets/Logo.png';
import LogoPag from '../assets/LogoPag.png';
import './Login.css';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
// import firebase from 'firebase/compat/app';
const auth = getAuth(appFirebase);

function Register() {
  
  const fireStore = getFirestore(appFirebase)
  const navigate = useNavigate();

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const correo = e.target.email.value;
    const edad = e.target.edad.value;
    const contraseña = e.target.password.value;
    const verifContraseña = e.target.verifPassword.value;
    
    if(contraseña != verifContraseña){
      alert("Las contraseñas no coinciden!")
      return;
    }
    try {
      const infoUser = await createUserWithEmailAndPassword(auth, correo, contraseña, verifContraseña, nombre, apellido, edad).then((usuarioFirebase) => {
          return usuarioFirebase
        }
      );
      // console.log(infoUser.user.uid)
      const docuRef = doc(fireStore, `usuarios/${infoUser.user.uid}`)
      setDoc(docuRef, {correo: correo, contraseña: contraseña, nombre: nombre, apellido: apellido, edad: edad}) 
      navigate('/login');
    } catch (error) {
      console.log(error)
      if(error.code === "auth/email-already-in-use"){
        alert("El email que intentas ingresar ya esta registrado!.")
      }else if(error === "auth/weak-password"){
        alert("Asegurese de que la contraseña contenga mas de 8 caracteres")
      }else{
        alert(`Error: ${error.message}`)
      }
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={LogoPag} alt="" className='estilo-profile' />
              <form onSubmit={functAutenticacion}>
                <input type="text" placeholder='Nombre' className='cajatexto' id='nombre' />
                <input type="text" placeholder='Apellido' className='cajatexto' id='apellido' />
                <input type="email" placeholder='Ingresar Email' className='cajatexto' id='email' />
                <input type="password" placeholder='Contraseña' className='cajatexto' id='password' />
                <input type="password" placeholder='Repetir Contraseña' className='cajatexto' id='verifPassword' />
                <input type="number" placeholder='Edad' className='cajatexto' id='edad' />
                <button className='btnform'>Registrarse</button>
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
          <img src={Aguila} alt="" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  );
}

export default Register;