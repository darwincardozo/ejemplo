import React,{ useState,useContext,useEffect} from 'react';
import Layout from '../components/layout/Layout';
import {FirebaseContext} from '../firebase';
import DetallesInformacion from '../components/layout/DetallesInformacion';
import { css } from '@emotion/react';

// useEffect, Para hacer la consulta a la base de datos
// useState, para colocar en el state esa consulta
// useContext,para tener acceso a todos los metodos



const Proyectos = ()=>{

       const [informacion,guardarInformacion] = useState([]);

       const {firebase} = useContext(FirebaseContext);


   
        useEffect(() => {

                   // con esta funcion se accede a los datos en firebase, principalmente 
                   // el onSnapshot, es quien accede a los datos en el firebase
       
              const obteneInformacion = ()=>{

                   firebase.db.collection('informacion').orderBy('creado','desc').onSnapshot(manejarSnapshot)
                 }

             obteneInformacion();
     
     
        }, [ ]);





        function manejarSnapshot (snapshot) {

               const informacion = snapshot.docs.map(doc =>{

                   return {

                      id: doc.id,
                      ...doc.data()
                   }

              });

          guardarInformacion(informacion);
 
      }
   

  
   
    return (


       <div>

          <Layout>
           
            <div className="listado-productos">
                 
              <div className= "contenedor">

                 <h1
                      css={css` 
                      
                         text-align: center;
                         margin-bottom: 3rem;
                        
                      `}

                 >Proyectos</h1>

                 <ul className="bg-white">
                   
                    {informacion.map(informacion=>(
                         
                         <DetallesInformacion        // Se importa componente DetallesInformacion en el
                                                     //Aparecera toda la informacion en pantalla.
                                                   
                                                    
                             key={informacion.id}       // Se pasa el key por el id. de la informacion
                             informacion={informacion}  // Se pasa el props de la informacion

                         />

                    ))}


                 </ul>
              </div>
            </div>
           
          </Layout>

        </div>

    )

}

export default Proyectos;