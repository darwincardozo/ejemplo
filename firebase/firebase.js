import app from 'firebase/app';
import 'firebase/auth';            
import 'firebase/firestore';

import firebaseConfig from './config';

import Router from 'next/router';



               // esta clase tendra los diferents metodos para los Usuarios 

class Firebase {


    constructor() {
                             
                             
    	if(!app.apps.length){

             app.initializeApp(firebaseConfig)
    	}

    	this.auth = app.auth();     // Hace referencia para tener acceso autenticaion(auth) firebase
        this.db = app.firestore();  // Hace referencia para tener acceso base datos (db)firebase         
        
    }



  // Registrar un usuario FUNCION registrar() y se agrega en crear-cuenta.js

  async registrar(nombre, email , password) {

              // Se crea el nuevo usuario
          const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);

             // Actualiza el Nombre de Usuario en la cabecera
          return await nuevoUsuario.user.updateProfile({
               displayName : nombre
           })

    }




 // Iniciar sesion del Usuario FUNCION login()


    async login (email, password) {
                                           
                                           
         return this.auth.signInWithEmailAndPassword(email, password);
         
       
    }




     // Cierra la sesion de Usuario 
     // se usa en el Header, porq se EXTRAJO el usuario y el firebase del context (*)
    
    async cerrarSesion() {

       await this.auth.signOut(); 
       Router.push('/')
       
    }





// Recuperar contraseñas FUNCION recuperar()

async recuperar (email) {
                                           
                                           
         return this.auth.sendPasswordResetEmail(email); 

    }




    //  // Cierra la sesion de Usuario 
    //  // se usa en el Header, porq se EXTRAJO el usuario y el firebase del context (*)
    
    // async cerrarSesion() {

    //    await this.auth.signOut(); 

    // }



}


const firebase = new Firebase ();

export default firebase;






