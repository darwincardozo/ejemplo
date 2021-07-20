import React,{useContext} from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
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

// const Logo = styled.a`      

//    color: var(--naranja);
//    font-size: 4rem;
//    line-height: 0;
//    font-weight: 700;
//    font-family: 'Roboto Slab' ,serif;
//    margin-right: 2rem;
   

// `;

const Logo = styled.img`      

  
   
   // font-family: 'Roboto Slab' ,serif;
   margin-right: 1rem;
   width: 20rem;
   height:15rem;
   

   &:hover{

     cursor: pointer;
     
    }

`;



const Header = ( ) => {

	 // USANDO EL CONTEXT para la :
     //  actualizacion del Nombre en pantalla y Crerrar Sesion
     // Se extrae el usuario y el firebase el context de firebase en el arhivo _app.js (*)
    
    const {usuario , firebase} =  useContext(FirebaseContext);
  


 return ( 

        <header
             css={css`

                  border-bottom: 3px solid black;
                  margin-bottom: .5rem;
                  height: 22rem;
                  background-color:#48D1CC;
                  font-weight: 700;


          
            `}

        >

            <ContenedorHeader>
                
                <div
                    css={css` 

                       display: flex;
                       align-items: center;
                    `}
                >

                    <Link href="/">
                        <Logo src="static/img/hispanos.png"/>
                     </Link>

                    
                     <Buscar/>


                     <Navegacion/>

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

                        <div
                          css={css`
                                                                                                  
                               display: flex;
                               margin-left: 100rem;
                               margin-bottom: 6rem;
                            
                            `}
                        >

                           <Link href="/Login">
                             <Boton>Login</Boton>
                           </Link>

                           <Link href="/crear-cuenta">
                             <Boton>Crear Cuenta</Boton>
                           </Link>

                        </div>

                      </>

               )}

               

           </div>

                   



           
                                  
              
                    

         </header>



     	);
     
}


export default Header;




