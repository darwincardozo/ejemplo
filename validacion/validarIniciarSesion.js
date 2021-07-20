
export default function validarIniciarSesion(valores) {


    let errores = {};

   
   // validar el email
   
   if (!valores.email){

        errores.email = "Escriba su Email";
 
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email ) ) {

          errores.email = "Email no valido"
          
     }


   // Validar el Password

  if (!valores.password) {

      errores.password = " Escriba su password";

  }else if (valores.password.length < 6 ) {

      errores.password = 'El password debe de ser de al menos 6 caracteres'

  }


return errores;



}