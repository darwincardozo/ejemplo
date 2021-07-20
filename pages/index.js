import React from 'react';
import Colayout from '../components/layout/Colayout';
import {css} from '@emotion/react';
import Link from 'next/link';


const index = ( ) => {
  
     return ( 

          <div>

             <Colayout>

                  
                 <div css={css`  


                     display: flex;
                     margin-top: 20rem;
                     margin-left: 10rem;
                     padding: 2rem;
                     font-size: 25px;
                   


                  `}

                  >

                    <div css={css` 
                         margin: .2rem;
                          
                          .facebook{
                            
                            background-color: #4682B4;
                             &:hover {
                             cursor: pointer;

                            }
                          }
                      `}

                     >

                        <Link href="https://es-la.facebook.com">
                            <button class="facebook"><i class="fab fa-facebook"></i>Facebook</button>
                        </Link>

                    </div>



                    <div css={css` 
                          
                          margin: .2rem;

                          .twitter{
                            
                            background-color: #00acee;
                            &:hover {
                             cursor: pointer;

                            }
                          }

                          
                     `}

                     >
                        <Link href="https://twitter.com/?lang=es">
                           <button class="twitter"><i class="fab fa-twitter"></i>Twitter</button>
                        </Link>
                    </div>




                   <div css={css` 
                       margin: .2rem;

                       .instagram{
                           
                          background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);

                          &:hover {
                             cursor: pointer;

                            }


                          }

                      
                       
                     `}

                     >

                      <Link href="https://www.instagram.com/?hl=es">
                          <button class="instagram"><i class="fab fa-instagram"></i>Instagram</button>
                      </Link>
                   </div>


                 </div>
                   



                               
                   

                 
            </Colayout>
          </div>


        );
    

  
}


export default index;




