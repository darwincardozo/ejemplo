import React,{useEffect, useState,} from 'react';
import Layout from '../components/layout/Layout';
import DetallesInformacion from '../components/layout/DetallesInformacion';
import useInformacion from '../hooks/useInformacion';
import { css } from '@emotion/react';
import {useRouter} from 'next/router';




const Buscar = ( ) => {

     // usando UseRouter() , Para leerlo lo que se paso Buscar.js-component/ui
   
    const router = useRouter();
                                // Destructurando query de useRouter
    const {query : {q} } = router;
 


              // ******* APLICANDO FILTRADO  **********

   
        // 1- Ussando HOOK useInformacion.., se requiere toda la informacion de la base datos

     const {informacion} = useInformacion('creado');

          
       // 2- Creando useState

   const[resultado,guardarResultado] = useState([ ]);


     
       // 3- Creando el UseEffect
      
       useEffect(() => {

             
        
           
            // const busqueda = q.toUpperCase();
            
            const busqueda = q.toUpperCase()
                 
          
           // console.log(busqueda);

            const filtro = informacion.filter(informacion =>{

                  // aqui se coloca los campos de como se quieren Buscar : nombre,descripcion,cliente

                return(

                     informacion.nombre.toUpperCase().includes(busqueda) ||
                     informacion.descripcion.toUpperCase().includes(busqueda) ||
                     informacion.proyecto.toUpperCase().includes(busqueda) 

               )

            });

            guardarResultado(filtro);
           
         
         }, [q, informacion ]);
       








       return ( 
        
          <div>
            <Layout>
           
            <div className="listado-productos">
                 
              <div className= "contenedor">

                 <h1
                      css={css` 
                      
                         text-align: center;
                      `}

                 >Busqueda de Proyectos</h1>

                 <ul className="bg-white">
                   
                    {resultado.map(informacion=>(
                         
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
      );
    
 
}


export default Buscar;




