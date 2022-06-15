// Add Your Scripts here
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Seleccionar el formulario para validar
      var forms = document.getElementsByClassName('needs-validation');
      // Validar cada campo y prevenir que se envie
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  /**Validacion de formulario **/
  
  function validarform(){

    let error = false;
    let messages = '';
    
    let nombre = document.getElementById('nombre').value;
    console.log("Nombre es :" + nombre);
    let email = document.getElementById('email').value;
    console.log("email es :" + email);
    let asunto = document.getElementById('asunto').value;
    console.log("asunto es :" + asunto);
    let mensaje = document.getElementById('mensaje').value;
    console.log("mensaje es :" + mensaje);

    //
    expresion= "^[_a-z0-9-]+(\\.[_a-z0-9-]+)*@" +
    "[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$";

    if(nombre === "" || email === "" || asunto === "" || mensaje === ""){
      alert('Todos los campos son obligatorios');
      return false;
    } else if(nombre.length>250){
      alert('El nombre es demasiado largo');
      return false;
    } else if(email.length>100){
      alert('El email es demasiado largo');
      return false;
    } else if(!expresion.test(email)){
      alert('No corresponde a un email');
      return false;
    } else if(asunto.length>100){
      alert('El asunto es demasiado largo');
      return false;
    } else if(mensaje.length>100){
      alert('El mensaje es demasiado largo');
      return false;
    }

    /*else if(email === ""){
      alert('El email viene vacio');
      return false;
    } 
    else if(){

    }*/



  }




  function valida_envia(){
    let nombre = document.getElementById('nombre');
    console.log("Nombre es :" + nombre);
    let email = document.getElementById('email');
    console.log("email es :" + email);
    let titulo = document.getElementById('titulo');
    console.log("titulo es :" + titulo);
    let mensaje = document.getElementById('mensaje');
    console.log("mensaje es :" + mensaje);
  }

