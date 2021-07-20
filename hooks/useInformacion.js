import React, {useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase';

  

    const useInformacion = orden => {

    
  // Se crea el useState

    const [informacion, guardarInformacion] = useState([ ]);


  // Se crea el useContext


 const {firebase} = useContext(FirebaseContext);

  // Se crea el useEffect

 
useEffect(() => {
    
       const obteneInformacion = () =>{

                       // firebase.db.collection('productos'), hacer la consulta a la base de Datos firestore
                       // orderBy('creado','desc'), Ordenar por el mas actualizado (desc = descendent) utilizando el campo (creado)
                       // onSnapshot(manejarSnapshot) , Para acceder a los registro utilizando la funcion (manejarSnapshot)

          firebase.db.collection('informacion').orderBy('creado','desc').onSnapshot(manejarSnapshot)

       }

          obteneInformacion();

  }, [ ])



     // Funcion Para Acceder a los Documentos 
 

 function manejarSnapshot(snapshot) {

                        // snapshot, accedemos a los documentos y los recorremos
                        
       const informacion = snapshot.docs.map(doc => {

               return {

                   id: doc.id,
                   ...doc.data()       // se trae todo el datos de cada uno de los documentos , es decir registro completo de firebase
               }
      });

     guardarInformacion(informacion);

 }

    


                 // Crea un State de Productos, por lo tanto se regresa un producto.
   return {

     informacion

    }

}

export default useInformacion; 