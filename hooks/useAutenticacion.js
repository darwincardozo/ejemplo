

      // Guardar sesion del usuario en firebase aunque se Recargue la pagina
      // Se importa al archivo _app.js

import React, { useEffect, useState } from 'react';
import firebase from '../firebase';


 // useState(null); su valor inicial es NUll ,porque no va ver ningun usuario autenticado cuando cargue la aplicacion-.
 
 function useAutenticacion() {
 
     const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);


       // useEffect, escuchara los cambios que sucedan 

   useEffect(() => {
   	
       const unsuscribe = firebase.auth.onAuthStateChanged(usuario =>{

                               // si hay un usuario autenticado,guardar usuario
              if(usuario) {

                   guardarUsuarioAutenticado(usuario);

              }else {          // sino hay usuario autenticado se guarda en null, que seria el valor por defecto

                   guardarUsuarioAutenticado(null);

              }

       });


      return () => unsuscribe();
       	   
   }, []);


   return usuarioAutenticado; 
 }


 export default useAutenticacion; 