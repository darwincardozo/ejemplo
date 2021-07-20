import React from 'react';
import styled from 'styled-components';



const Boton = styled.a`  

    display: flex;
    font-weight: 400;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem;
    margin: 1.5rem .3rem; 
    text-align: center;
    background-color: #00BFFF;
    color: white;
    border-radius: 8px;
    
  


   // &:last-of-type {

   // 	   margin-right:0;
   // }

   &:hover {

     cursor: pointer;
       
     background-color: #1E90FF;

   }

`;

export default Boton; 