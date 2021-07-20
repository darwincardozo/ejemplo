import React,{useState} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import {Formulario,Campo,InputSubmit,Error} from '../components/ui/Styled-Component';
import { css } from '@emotion/react';
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';  // validarCrearCuenta del useValidacion

import firebase from '../firebase';   // clase de firebase / importara el index.js de firebase
import Router from 'next/router';



     // state del useValidacion

 const STATE_INICIAL = {           

   nombre: '',
   email:'',
   password:''

 }


const CrearCuenta = ()=>{

   // Se crea un state , para Mostrar Error del CORREO
  const [error, guardarError] = useState(false)




   // Se usa useValidacion 
   // Se copia el return de useValidacion
   // Se crea el STATE-INICIL
   // validarCrearCuenta, se importa.
   // Se crea la funcion CrearCuenta()

const {valores, errores,submitForm, handleChange,  handleSubmit, handleBlur} =useValidacion(STATE_INICIAL, validarCrearCuenta, FuncionCrearCuenta);
 

//Se extraen los valores para hacer uso del handleChange
//se coloca en los diferentes campos : nombre , email , password
//value:
//onChange:

const {nombre , email , password } = valores;






// funcion del useValidacion

async function FuncionCrearCuenta(){
         
     try {
                                      
            // Se agrega la funcion registrar() de firebase
 
         await firebase.registrar(nombre , email , password )
         alert('Ha sido registr@ perfectamente')
         Router.push('/RegistrarProyecto');
             
     
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
        > Crear Cuenta </h1>
        
        <Formulario
           onSubmit={handleSubmit}        
        >

                     {/*Nombre*/}
            <Campo>
               <label for="nombre">Nombre</label>
               <input
                  type="text"
                  id="nombre"
                  placeholder="Tu Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            </Campo>

            {errores.nombre && <Error>{errores.nombre}</Error>}


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
                value="Crear Cuenta"

              />

        </Formulario>
     </>
    </Layout>
   </div>
)

}

export default CrearCuenta;