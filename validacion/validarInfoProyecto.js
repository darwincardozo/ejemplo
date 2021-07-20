
export default function validarInformacionProyecto(valores) {


    let errores = {};

                                       
    // Validar Campo nombre del Cliente
  
  if (!valores.nombre) {                        

         errores.nombre = " Escriba el nombre del Cliente";

    }

   // Validar Campo Proyecto
   
                          // si los valores no tiene empresa , se genera los errores
   if (!valores.proyecto) {
      
        errores.proyecto = "Escriba nombre del proyecto"

   }


 
   // Validar Descripcion


if(!valores.descripcion) {

    errores.descripcion ="Escriba una Descripcion "


}




return errores;



}