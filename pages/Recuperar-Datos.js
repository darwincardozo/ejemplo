import React,{useState} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import {Formulario,Campo,InputSubmit,Error} from '../components/ui/Styled-Component';
import { css } from '@emotion/react';
import useValidacion from '../hooks/useValidacion';
import validarRecuperar from '../validacion/validarRecuperar';  // validarCrearCuenta del useValidacion

import firebase from '../firebase';   // clase de firebase / importara el index.js de firebase
import Router from 'next/router';



     // state del useValidacion

 const STATE_INICIAL = {           
 
   email:''

 }


const RecuperarDatos = ()=>{


   // Se crea un state , para Mostrar Error del CORREO
  const [error, guardarError] = useState(false)






   // Se usa useValidacion 
   // Se copia el return de useValidacion
   // Se crea el STATE-INICIL
   // validarCrearCuenta, se importa.
   // Se crea la funcion CrearCuenta()

const {valores, errores,submitForm, handleChange,  handleSubmit, handleBlur} =useValidacion(STATE_INICIAL, validarRecuperar, FuncionRecuperarContraseñas);
 

//Se extraen de los valores el { email } para hacer uso del handleChange
//value:
//onChange:

const {email} = valores;






// funcion del useValidacion

async function FuncionRecuperarContraseñas(){
         
     try {
                                      
            // Se agrega la funcion de firebase
         await firebase.recuperar(email)
 
      if(!error){

           guardarError('Hemos enviado un correo para el cambio de contraseñas')

        }

                    

         // Router.push('/crear-cuenta');
             
     
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
        > Recuperar Contraseñas</h1>
        
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



             {/*MOSTRAR EL ERROR DEL CORREO*/}

         {error && <Error>{error}</Error>}



                 {/*BOTON SUBMIT*/}


              <InputSubmit type="submit"
                value="Recuperar Contraseñas"

              />

        </Formulario>
     </>
    </Layout>
   </div>
)

}

export default RecuperarDatos;