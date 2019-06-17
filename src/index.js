
function mostrar(id){
    if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id); //buscando el id
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
    }
    window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    mostrar('contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    }

    function enviarTexto()
    {
        let persona=document.getElementById("usuario").value;
        let lugar=document.getElementById("departamento").value;
        document.getElementById("resultado").value='Hola'+persona+lugar;
    };  

//variables de los botones
let cifrar = document.getElementById("cifrado"); 
let descifrar = document.getElementById("descifrado");


//Eventos a los botones
cifrar.addEventListener("click", encode);
descifrar.addEventListener("click", decode);

    