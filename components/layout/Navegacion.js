import React,{useContext} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {FirebaseContext} from '../../firebase';


  // Estilos a la Navegacion

const Navi = styled.nav`

    padding-left: 3rem;

    a{

     font-size: 1.8rem;
     margin-left: 1rem;
     // color: var(--gris2);
     color:black;
     font-family: 'PT Sans',sans-serif;


     &:last-of-type{

        margin-right: 0;

     }

     &:hover{

        color:#1E90FF;
        text-decoration: underline;

     }

    }
`;


const Navegacion = ( ) => {
  
  
     // USANDO EL CONTEXT
     // Se extrae el usuario del context de firebase (*) en el arhivo _app.js
    
    const {usuario} =  useContext(FirebaseContext);
  

     return ( 

          <Navi>
           
                       {/* usuario &&, Si existe el ususario*/}
           
               {usuario && (

                <>
                     <Link href ="Proyectos">Proyectos</Link>
                     <Link href ="RegistrarProyecto">Registrar Proyectos</Link>
                </>

                  )}


          </Navi>


     	);
    
  }


export default Navegacion;




