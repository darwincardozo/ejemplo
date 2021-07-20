
 export default function validarRecuperar(valores) {


    let errores = {};    // objeto de Errores este vacio

                                 
      

    // validar el email
   
   if (!valores.email){

        errores.email = "Escriba su Email";
 
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email ) ) {

           errores.email = "Email no valido"
          
      }




 return errores;



 }