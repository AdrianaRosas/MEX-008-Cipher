window.cipher = {
  //Cifrado
  encode: (offset, str) => { //función de codificado que recibirá el valor del string y el offset
    offset = parseInt(offset); //busca un número en el input
    let result = ""; //variable para la fórmula
    for (let i = 0; i < str.length; i++) { //se crea un bucle  con una variable interna, luego mide el tamaño del string y lo recorre 
      let letter = str.charCodeAt(i); //variable para devolver el caracter y convirtiendo el texto al valor asignado en el if y else
      if (letter >= 65 && letter <= 90) result += String.fromCharCode((letter - 65 + offset) % 26 + 65); //se usa el operador && para que se cumplan las condiciones de mayor que y menor por sus posiciones en el código ASCII
      //devuelve el caracter de letter después de aplicar la fórmula + el valor del offset
      else if (97 <= letter && letter <= 122) result += String.fromCharCode((letter - 97 + offset) % 26 + 97); // Aplicando forumula de conversion minúsculas por su posición en el cógigo ASCII
      else result += str.charAt(i) // Devuelve el primer caracter de la nueva cadena
	}
    return result
  },

  // Descifrado//
  decode: (offset, str) => { //función de decodificado
    offset = parseInt(offset);
    let result = ""; //variable para la fórmula
    for (let i = 0; i < str.length; i++) {
      let letter = str.charCodeAt(i); 
      if (letter >= 65 && letter <= 90 - offset) result += String.fromCharCode((letter - 65 - offset) % 26 + 65); //se usa el operador && para que se cumplan las condiciones de mayor que y menor por sus posiciones en el código ASCII
      else if (((90 - offset) + 1) <= letter && letter <= (90 - offset)) result += String.fromCharCode((letter - 97 - offset) % 26 + 97); 
      else result += str.charAt(i) // Devuelve el primer caracter de la nueva cadena
    }
    return result
  },





   //decode: (offset, str) => {
     //const m = document.getElementById("texto").value; //Se le da valor al texto introducido
     //let desplazar = document.getElementById("shift").value; //Lugares a desplazar
     //let s = parseInt(desplazar);
     //let result = " "; //variable para la fórmula
     //for (let i = 0; i < m.length; i++) {
      // let letter = m.charCodeAt(i); //convirtiendo el texto a codigo ASCII
      // if (65 <= letter && letter <= (90 - s)) result += String.fromCharCode((letter - 65 - s) % 26 + 65); // Aplicando la fórmula para letras mayúsculas
      // else if (((90 - s) + 1) <= letter && letter <= (90 - s)) result += String.fromCharCode((letter - 97 - s) % 26 + 97); // Aplicando la fórmula para letras minúsculas
      // else result += m.charAt(i) // Devuelve el primer caracter de la nueva cadena
     // document.getElementById("mostrarResultado").value = result; // Resultado en HTML

    
  //Cifrado
  //encode: (offset, str) => { //función de codificado
    //offset = parseInt(offset); //busca un número en el input 
    //let result = ""; //variable para la fórmula
    //for (let i = 0; i < str.length; i++) { //se crea un bucle  con una variable interna, luego mide el tamaño del string y lo recorre 
     // let letter = str.charCodeAt(i); //variable para devolver el caracter y convirtiendo el texto al valor asignado en el if y else
     // if (letter >= 65 && letter <= 90) result += String.fromCharCode((letter - 65 + offset) % 26 + 65); //se usa el operador && para que se cumplan las condiciones de mayor que y menor por sus posiciones en el código ASCII
      //devuelve el caracter de letter después de aplicar la fórmula + el valor del offset
     // else if (65 <= letter && letter <= 122) result += String.fromCharCode((letter - 65 + offset) % 26 + 90); //la otra condición es para las mayúsculas y los cararcteres especiales por su posición en el código ASCII
      //else result += str.charAt(i) // Devuelve el primer caracter de la nueva cadena después de aplicar la fórmula
//	}
   // return result
 // },



   //decode: (offset, str) => {
     //const m = document.getElementById("texto").value; //Se le da valor al texto introducido
     //let desplazar = document.getElementById("shift").value; //Lugares a desplazar
     //let s = parseInt(desplazar);
     //let result = " "; //variable para la fórmula
     //for (let i = 0; i < m.length; i++) {
      // let letter = m.charCodeAt(i); //convirtiendo el texto a codigo ASCII
      // if (65 <= letter && letter <= (90 - s)) result += String.fromCharCode((letter - 65 - s) % 26 + 65); // Aplicando la fórmula para letras mayúsculas
      // else if (((90 - s) + 1) <= letter && letter <= (90 - s)) result += String.fromCharCode((letter - 97 - s) % 26 + 97); // Aplicando la fórmula para letras minúsculas
      // else result += m.charAt(i) // Devuelve el primer caracter de la nueva cadena
     // document.getElementById("mostrarResultado").value = result; // Resultado en HTML

   // }

  
}
