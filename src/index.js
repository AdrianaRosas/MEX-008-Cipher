const datos = document.getElementById('datos')
const m = document.getElementById("texto"); //Se le da valor al texto introducido
let desplazar = document.getElementById("shift"); //Lugares a desplazar
let empezar= document.getElementById("empezar");
empezar.addEventListener("click", mostrar)

function mostrar() {
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById('contenido'); //buscando el id
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
  }
}
window.onload = function () {
  /*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
  mostrar('contenido'); /* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

function enviarTexto() {
  let persona = document.getElementById("usuario").value;
  let lugar = document.getElementById("departamento").value;
  document.getElementById("resultado").value = '¡Hola' + " " + persona + " " + "del" + " " + lugar + "!";
}

//variables de los botones
let cifrar = document.getElementById("cifrado");
let descifrar = document.getElementById("descifrado");


//Eventos a los botones
cifrar.addEventListener("click", () => {
    let str = m.value
    let offset = desplazar.value
    const resp = window.cipher.encode(offset, str)
	document.getElementById("mostrarResultado").value = 'Tu nuevo código es:' + resp; // Resultado en HTML

});

descifrar.addEventListener("click", () => {
  let str = m.value
  let offset = desplazar.value
  const resp = window.cipher.decode(offset, str)
document.getElementById("mostrarResultado").value = 'Tu nuevo código es:' + resp; // Resultado en HTML

});


// descifrar.addEventListener("click", decode);
datos.addEventListener('click', enviarTexto)


