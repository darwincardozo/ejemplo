import React,{useState, useContext} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import {Formulario,Campo,InputSubmit,Error} from '../components/ui/Styled-Component';
import { css } from '@emotion/react';
import useValidacion from '../hooks/useValidacion';
import validarInformacionProyecto from '../validacion/validarInfoProyecto';  

import {FirebaseContext} from '../firebase';   // Para crear Informacion se necesita el useContext,FirebaseContext
import Router,{useRouter} from 'next/router';



     // state del useValidacion

 const STATE_INICIAL = {           

   nombre: '',
   proyecto:'',
   descripcion: ''
  

 }


const RegistrarProyecto= ()=>{

      const [proyect, guardarProyect] = useState(false)

  //  // Se crea un state , para Mostrar Error del CORREO
  // const [error, guardarError] = useState(false)


   // Se usa useValidacion 
   // Se copia el return de useValidacion
   // Se crea el STATE-INICIL
   // validarCrearCuenta, se importa.
   // Se crea la funcion CrearCuenta()

const {valores, errores, handleChange,  handleSubmit, handleBlur} =useValidacion(STATE_INICIAL, validarInformacionProyecto, FuncionCargarInformacion);
 
//Se extraen los valores para hacer uso del handleChange
//se coloca en los diferentes campos :
//value:
//onChange:

const {nombre ,proyecto,descripcion } = valores;






// Se hace uso del {useRouter}

     const router = useRouter();


// Funcionalidad de Firebase para Crear Informacion de l proyecto
// Se utiliza context para CRUD .

const {usuario,firebase} = useContext(FirebaseContext);


// funcion del useValidacion

  async function FuncionCargarInformacion() {
                
       
      // Cargar Informacion 

         const informacion ={
            nombre,
            proyecto,
            descripcion,
            creado: Date.now()
          }
      
 
 try {
                                  
         firebase.db.collection('informacion').add(informacion);
         alert('Su proyecto se registro Correctamente')
         router.push('Proyectos');
 
 } catch (error) {
         
             guardarProyect('error') 
         
 }
 




    // // Si el usuario no esta autenticado llevar al login     

        // if(!usuario){

        //     return router.push('/');
            

        // }




     // Insertar la Informacion a la Base de Datos      

      // firebase.db.collection('informacion').add(informacion);

                         
             // return router.push('/')
        
                   
      

 }
     


 return (


   <div>
      <Layout>
       <>
        <h1 css={css`

            text-align: center;
            margin-top: .5rem;

          `}

                              /*Se hace uso del handleSubmit*/
        > Registrar Proyectos </h1>
        
        <form css={css`
      max-width: 450px;
     width: 60%;
     margin: 2px auto 0 auto;    
     border: 2px solid white;
      padding: 3rem;
      height: 55rem;



            `}

           onSubmit={handleSubmit}        
    
        >


           <fieldset>
             <legend><strong>Datos</strong></legend>


                     {/*CLIENTE*/}
            <Campo>
               <label for="nombre">Cliente:</label>
               <input
                  type="text"
                  id="nombre"
                  placeholder="Nombre del Cliente"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            </Campo>

            {errores.nombre && <Error>{errores.nombre}</Error>}



                      {/*PROYECTO*/}
            <Campo>
               <label for="proyecto">Proyecto:</label>
               <input
                  type="text"
                  id="proyecto"
                  placeholder="Nombre del Proyecto"
                  name="proyecto"
                  value={proyecto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            </Campo>

            {errores.proyecto && <Error>{errores.proyecto}</Error>}


                    {/*MOSTRAR EL ERROR DEL CORREO*/}

                    {/*} {error && <Error>{error}</Error>}*/}

        </fieldset>



                {/*Descripcion de Actividades*/}

       <fieldset>
          
          <legend><strong>Descripcion Actividades</strong></legend>

            <Campo>
               <label for="descripcion"></label>
               <textarea
                
                  id="descripcion"
                  // placeholder="Descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            </Campo>

            {errores.descripcion && <Error>{errores.descripcion}</Error>}

       </fieldset>

                 {/*BOTON SUBMIT*/}


              <InputSubmit type="submit"
                value="Cargar Informacion"

              />

        </form>
     </>
    </Layout>
   </div>
)

}

export default RegistrarProyecto;