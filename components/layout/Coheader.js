import React,{useContext} from 'react';

import Link from 'next/link';
import { css } from '@emotion/react';
import styled from 'styled-components';
import Boton from '../ui/Boton';
import {FirebaseContext} from '../../firebase';   

// Con el useContext y FirebaseContext se puede usar objeto de usuario, 
// y lo de firebase para base datos


const ContenedorHeader = styled.div`  
  
    max-width: 1200px;
    width: 100%;
    margin-left: 1rem;


    @media (min-width:768px){
      
       display: flex;                              
       justify-content: space-between;       {/*  colocar los dos div uno al lado del otro*/}
  
    }

`;




const Logo = styled.p`      

   color: #FF4500;
   font-size: 4rem;
   line-height: 1rem;
   font-weight: 700;
   font-family: 'Roboto Slab' ,serif;
   // font-family: verdana, arial, helvetica;
   margin-left: 10rem;
    // width: 15rem;
   height: 1rem;
   margin-bottom: 6rem;
   margin-top: 12rem;
   font-style: italic;

    
   
`;



const Coheader = ( ) => {

     // USANDO EL CONTEXT para la :
     //  actualizacion del Nombre en pantalla y Crerrar Sesion
     // Se extrae el usuario y el firebase el context de firebase en el arhivo _app.js (*)
    
    const {usuario , firebase} =  useContext(FirebaseContext);
  


 return ( 

        <header
             css={css`

                  // border-bottom: 2px solid #d1d1d1;
                  // margin-bottom: .5rem;
                  height: 30rem;
                 

          
            `}

        >

            <ContenedorHeader>
                
                <div
                    css={css` 

                       display: block;
                                                        
                    `}
                >

                   <Logo>
                     
                     <p>Bievenidos a Hispanos Soluciones. </p> 
                     <p>Solo una parte del mundo en tus manos... </p>

                   </Logo>
                                
                    
                </div>


          </ContenedorHeader>

                 <div css={css`

                       display: flex;
                       // align-items: center;
                       // text-align: right;
                      // margin-right: rem;
                  
                  `}
                >

                {usuario? (
    
                  
       
                      
                      <>

                      
                     
                          <div css={css`
                                                     
                                
                                 // margin-right:1px;
                                 position: relative;
                                 left: 110rem;

                              
                               `}
                          >
                                                                        
                              {/*Se coloca la funcion cerrarsesion() que se creo en firebase.js*/}
                        
                             <Boton

                                  onClick={() => firebase.cerrarSesion()}
                                >Cerrar Sesion

                             </Boton>

                          </div>



                          <div css={css`
                                                     
                                
                                margin-top:2rem;
                                margin-left : 70rem;
                             `}
                          >

                              <p>Bienvenid@: {usuario.displayName} </p>

                          </div>

                  
                      </>

                   ):(

                 
                      <>

                        <div css={css`  


                            display: flex;
                            border: 1px solid black;
                            margin-left: 85rem;
                            width: 30%;
                            height: 80%;
                            background-color: white;
                            margin-top: 5rem;
                            border-radius: 30px;
                        
                                            


                            `}


                        >

                           <div css={css`

                                 width: 40rem;
                                 height: 20rem;
                                 margin-left: 1rem;
                              
                            `}
                           >

                                 <img src=" static/img/hispanos.png" />

                           </div>


                        
                        <div
                          css={css`
                                                                                                  
                               display: flex;
                               margin-left: -30rem;
                               // margin-top: 1rem;
                               margin-bottom: 20rem;

                            
                            `}
                        >

                           <Link href="/Login">
                             <Boton>Login</Boton>
                           </Link>

                           <Link href="/crear-cuenta">
                             <Boton>Crear Cuenta</Boton>
                           </Link>

                        </div>


                    </div>    

                      </>

               )}

               

           </div>

                   



           
                                  
              
                    

         </header>



        );
     
}


export default Coheader;




