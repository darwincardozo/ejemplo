import App from 'next/app';           // App, es el principal y viene incluido de next

import firebase, {FirebaseContext} from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';


const MyApp = props => {

    const usuario = useAutenticacion();
    

                    // "Component" : componente actual y "pageProps" : Props de la pagina
                     /* <Component {...pageProps} />  , Es una forma de agregar el componente*/
                    
       
	const {Component, pageProps} = props;

    return (

              // con el uso del Provider ,se coloca los valores que se haran disponible
                                 
          <FirebaseContext.Provider

                value={{

                   firebase,
                   usuario
                 

                }}


          >

                                        

           <Component {...pageProps} />  


          </FirebaseContext.Provider>



    )


}

export default MyApp;