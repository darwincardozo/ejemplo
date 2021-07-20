
import React,{useState,useEffect} from 'react';


const useValidacion = (stateInicial, validar, fn ) => {
  
     const [valores, guardarValores] = useState(stateInicial);
     const [errores,guardarErrores] = useState({});
     const [submitForm, guardarSubmitForm] = useState(false);
    
    useEffect(() => {
         
           if (submitForm) {               // si submitForm, esta en true.

               const noErrores = Object.keys(errores).length === 0;       // Object.keys, revisa si el objeto(errores) esta vacio o no-.


                 if(noErrores) {

                        fn();          // fn = Funcion que se ejecuta en el componente
                   }

                 guardarSubmitForm(false);
          }
        
    },[errores]);           //  se coloca errores como dependencia, para que revise si hay errores todo el tiempo

      


       // Funcion cuando el Usuario escribe y va agregrando el state
    
       const handleChange = e => {

           guardarValores({

                ...valores,                       // ...valores, copia de los valores
                [e.target.name] : e.target.value  // [e.target.name] le pasa datos a  e.target.value

           })

       }





      // Funcion cuando el usuario hace submit
    

        const handleSubmit = e => {

           e.preventDefault();
           const erroresValidacion = validar (valores);    // los Valores son lo que escribe el usuario
           guardarErrores(erroresValidacion);
           guardarSubmitForm(true);

       }



       //  Funcion de blur, es salir del input y marcara un error
       
        const handleBlur = () => {

           const erroresValidacion = validar (valores);
           guardarErrores(erroresValidacion);


        }




      return {

         valores,
         errores,
         submitForm,
         handleChange,
         handleSubmit,
         handleBlur

     }
    
 }


 export default useValidacion;




