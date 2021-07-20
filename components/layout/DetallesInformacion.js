import React from 'react';
import styled from 'styled-components';
import FormatDistanceToNow from  'date-fns/FormatDistanceToNow';
import {es} from 'date-fns/locale';

 
const Lista = styled.li`

   padding: 4rem;
   border-bottom: 1px solid #e1e1e1;

 `;


                                 // Se coloca los props de la {informacion} del index.js de (pages)
const DetallesInformacion = ( {informacion} ) => {      
  

  // console.log(informacion);

   const { creado, descripcion, id, nombre, proyecto} = informacion;

               
     return ( 
       
         
        <Lista>
                        
              <div>
              
                  <ladel for="nombre"><strong>Cliente:</strong> </ladel> {nombre}<br/>
                  <ladel for="nombre"><strong>Nombre del Proyecto:</strong> </ladel> {proyecto}<br/>
                  <ladel for="nombre"><strong>Descripcion del Actividades:</strong> </ladel> {descripcion}<br/>
                  <ladel for="nombre"><strong>Publicado hace:</strong> </ladel>{FormatDistanceToNow(new Date (creado),{locale:es}) }<br/>
                                                  
            </div>
      
         
         </Lista>

    );
    

  
}


export default DetallesInformacion;




