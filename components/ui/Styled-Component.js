import React from 'react';
import styled from 'styled-components';




export const Formulario = styled.form`

     max-width: 450px;
     width: 60%;
     margin: 2px auto 0 auto;    
     border: 2px solid white;
      padding: 3rem;
      height: 20rem;



     fieldset {

         margin: .5rem;
         border: 1px solid #e1e1e1;
         font-size: 1.5rem;
         padding: 1.5rem;

     }
    

   
`;


export const Campo = styled.div`

     margin-bottom: 2rem;
     display: flex;
     align-items: center;




     label {

        flex: 0 0 80px;
        font-size: 1.8rem;


     }


     input,
     textarea {

         flex: 1;
         padding: .5rem;

     }

     textarea {

         height: 150px;


     }


`;

export const InputSubmit = styled.input`

    background-color: #00BFFF;
    width: 100%;
    margin-bottom: 30px;
    padding: 1rem;
    text-align: center;
    color: white;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;


    &:hover{

     cursor: pointer;
     background-color: #1E90FF;

    }
 
`;


export const Error = styled.p`

   background-color: red;
   padding: .5rem;
   font-family: 'PT Sans' , sans-serif;
   font-weight: 700;
   font-size: 1.2rem;
   color: #FFF;
   text-align: center;
   text-transform: uppercase;
   margin: 1rem 0;
   width:30%;


`;