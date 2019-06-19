const datos = document.getElementById('datos') //asignamos variable para el botón de datos del usuario
const txt = document.getElementById("texto"); //variable para el texto introducido 
let desplazar = document.getElementById("shift"); //variable para offset
let empezar= document.getElementById("empezar"); //variable para el botón "empezar", que despliega la siguente sección
empezar.addEventListener("click", mostrar) //evento del click para mostrar la sección oculta en la página


function mostrar() { //función para desplegar la segunda sección del documento
  if (document.getElementById) { 
    var cont = document.getElementById('contenido'); //se crea una variable para ubicar el div a desplegar y se ubica en el HTML
    cont.style.display = (cont.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div con una función ternaria
   
  }
}
window.onload = function () {
  //hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente//
  mostrar('contenido'); //"contenido" es el nombre del DIV
}

function enviarTexto() { //función para mostrar el resultado del nombre y el departamento 
  let persona = document.getElementById("usuario").value; //variable para darle valor al input del nombre 
  let lugar = document.getElementById("departamento").value; //variable para darle valor al input del departamento
  document.getElementById("resultado").value = '¡Hola' + " " + persona + " " + "del" + " " + lugar + "!"; //resultado  
}
datos.addEventListener('click', enviarTexto) //evento del click para que aparezcan los datos del ususario

//variables de los botones
let cifrar = document.getElementById("cifrado"); // variable para el botón de cifrado
let descifrar = document.getElementById("descifrado"); //variable para el botón de descifrado


//Eventos a los botones
cifrar.addEventListener("click", () => { //función para el botón de cifrado
    let str = txt.value //variable para darle valor al texto a codificar 
    let offset = desplazar.value //valor para el offset
    const resp = window.cipher.encode(offset, str) //variable que va a buscar la función de codificar en el archivo cipher junto con sus valores(offset y str)
	document.getElementById("mostrarResultado").value = 'Tu nuevo código es:' + resp; // Resultado en HTML en el input correspondiente

});

descifrar.addEventListener("click", () => { //función para el botón de descifrado
  let str = txt.value 
  let offset = desplazar.value
  const resp = window.cipher.decode(offset, str) //variable que va a buscar la función de decodificar en el archivo cipher
document.getElementById("mostrarResultado").value = 'Tu nuevo código es:' + resp; // Resultado en HTML en el input correspondiente

});





