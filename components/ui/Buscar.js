import React,{useState} from 'react';
import { css } from '@emotion/react';
import styled from 'styled-components';
import Router from 'next/router';

                        // ****** ESTE ARCHIVO DE BUSQUEDA REPRESENTA AL INPUT DE BUSQUEDA **** //

const InputText = styled.input`   

     border: 3px solid var(--gris3);
     padding: 1rem;
     min-width: 250px;

      &:focus {
     
         outline: 0 none;
         // border-color: #00BFFF;
          border-color: black;
        
      }
    
`;

const InputSubmit = styled.button`

       height: 3rem;
       width: 3rem;
       display: block;
       background-size: 4rem;
       background-image: url('/static/img/lupa.jpg');
       background-repeat: no-repeat;
       position: absolute;
       right: 1rem;
       top: 6px;
       background-color: white; 
       border: none;
       text-indent: -9999px;

      &:hover {

          cursor: pointer;
      }

`;



const Buscar = ( ) => {

        // 1- Se prepera el state para la busqueda
  
   const [busqueda ,guadarBusqueda] = useState('');


    // si busqueda esta vacia 
    
   const buscarInformacion = e => {
       e.preventDefault();

       console.log('buscando...', busqueda);

       // Si la busqueda esta vacia NO realizar ninguna accion
     if(busqueda.trim() === '') return;

          
      // Redirecionar el usuario a la URL utilizando los valores colcoados en el input Buscar
   
      Router.push({
     
         pathname: '/Buscar',    // redirecciona a la pagina de Buscar.js
         query: { q: busqueda}
     

      })
    


   }




     return ( 

        <form

             css={css`

             	position: relative;

             `}

             onSubmit={buscarInformacion}    // 3- se coloca esta funcion para buscar informacion cuando se le de submit

        >

            <InputText 
                type="text" 
                placeholder="Buscar"
                onChange= {e => guadarBusqueda(e.target.value)}   // 2-se coloca esta funcion para guardar todo lo que se escriba en state 
            />

            <InputSubmit type="submit">Buscar</InputSubmit>

         </form>

    );
      
}


export default Buscar;




