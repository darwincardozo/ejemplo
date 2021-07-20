import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';





   const Logotipo = styled.img`      

   font-size: 4rem;
     line-height: 0;
    //font-weight: 700;
   // font-family: 'Roboto Slab' ,serif;
   //margin-left: 9rem;
   margin: auto; 
   display: block;
   width: 40rem;
   height: 40rem;
   img-position: center;
   

   &:hover{

     cursor: pointer;

    }

`;







const Principio = () => {
  
    
      return (

      <>
           

            <Link href="/">
                <Logotipo src="static/img/hispanos.jpg"/>
             </Link>
      </>

        )

        


  
}


export default Principio;




