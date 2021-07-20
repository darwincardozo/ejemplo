import React,{useState} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import {Formulario,Campo,InputSubmit,Error} from '../components/ui/Styled-Component';
import { css } from '@emotion/react';
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';  // validarIniciarSesion del useValidacion

import firebase from '../firebase';   // importara el index.js de firebase
import Router from 'next/router';
import Link from 'next/link';



     // state del useValidacion

 const STATE_INICIAL = {           
   
   email:'',
   password:''

 }


const Login= ()=>{

   // Se crea un state , para Mostrar Error del CORREO
  const [error, guardarError] = useState(false)




   // Se usa useValidacion 
   // Se copia el return de useValidacion
   // Se crea el STATE-INICIL
   // validarCrearCuenta, se importa.
   // Se crea la funcion CrearCuenta()

const {valores, errores,submitForm, handleChange,  handleSubmit, handleBlur} =useValidacion(STATE_INICIAL, validarIniciarSesion, FuncionIniciarSesion);
 

//Se extraen los valores para hacer uso del handleChange
//se coloca en los diferentes campos : nombre , email , password
//value:
//onChange:

const {email , password } = valores;


// funcion del useValidacion

async function FuncionIniciarSesion(){
             
            
       try {

        await firebase.login(email,password)
  
        Router.push('Proyectos');
                                      
                   
       } catch (error) {
               
             // MUESTRA ERROR DEL CORREO
       guardarError(error.message);              
               
       }
       


}



 return (


   <div>
      
        <Layout>
       <>
        <h1 css={css`

            text-align: center;
            margin-top: 2rem;

          `}

                              /*Se hace uso del handleSubmit*/
        > Login </h1>
        
        <Formulario
           onSubmit={handleSubmit}        
        >
                    

                      {/*EMAIL*/}
            <Campo>
               <label for="email">Email</label>
               <input
                  type="email"
                  id="email"
                  placeholder="Tu email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
             </Campo>

            {errores.email && <Error>{errores.email}</Error>}

                      {/*PASSWORD*/}
            <Campo>
                <label for="password">Password</label>
                <input
                   type="password"
                   id="password"
                   placeholder="Tu password"
                   name="password"
                   value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
           </Campo>

        {errores.password && <Error>{errores.password}</Error>}


             {/*MOSTRAR EL ERROR DEL CORREO*/}

         {error && <Error>{error}</Error>}



                 {/*BOTON SUBMIT*/}


              <InputSubmit type="submit"
                value="Iniciar Sesion"

              />

        

           <Link href="Recuperar-Datos">
                <a css={css`

                     color: white;

                     &:hover{

                        cursor: pointer;
                        color:black;
                     }

                    `}

                >¿Recuperar contraseña?</a>
            
           </Link>


       

           

        </Formulario>
     </>
    </Layout>
   </div>
)

}

export default Login;

