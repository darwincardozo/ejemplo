import React from 'react';
import Coheader from './Coheader';
import {Global, css} from '@emotion/react';
import Head from 'next/head';



const Colayout = props => {

   return (

     <>

        <Global 

             styles={css` 


                   :root {

                     --gris: #3d3d3d;
                     --gris2: #6f6f6f;
                     --gris3: #e1e1e1;
                     --naranja: #DA552F;

                   }

                  html {

                     font-size: 60%;
                     box-sizing: border-box;

                  }

                  *,*:before, *after {
                      box-sizing: inherit;
                  }

                  body{

                     font-size: 1.6rem;  
                     // line-height: 1.5;
                     // font-family: 'PT Sans', sans-serif;
                     background-image: url("static/img/mundi2.jpg");
                     background-repeat: no-repeat;
                     background-position: center;
                     background-size: cover;
                    

                     

                  }
                  h1, h2, h3, {

                     margin: 0 0 2rem 0;
                     line-height: 1.5;

                  }

                  h1,h2 {

                    font-family: 'Roboto Slab',serif;
                    font-weight: 700;


                  }

                  h3 {


                    font-family: 'PT Sans', sans-serif;

                  }
                  ul {

                     list-style: none;
                     margin: 0;
                     padding: 0;

                  }

                  a {
 
                     text-decoration: none;

                  }

                  img {

                      max-width: 100%;    para hacer todas las imagenes responsive

                  }


               `}
        
          />

          <Head>

        
            <title>EJEMPLO</title>

                           
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerpolicy="no-referrer" />


              // fuente Google Fonts ( pendiente con la diagonal /> para cerrar el link)
              
              
               <link rel="preconnect" href="https://fonts.gstatic.com"/>
               <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto:wght@100&display=swap" rel="stylesheet"/>

              // ENLAZAR  LA HOJAS ESTILO DE APP.CSS

               <link href="/static/css/app.css" rel="stylesheet" />

               // FONT-AWENSON

               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       
         </Head>



         <Coheader/>

            
                
          <main>

              {props.children}

         </main>


     </>


    );


}

export default Colayout;