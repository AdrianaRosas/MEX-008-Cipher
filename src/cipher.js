window.cipher = {
  //Cifrado
  encode: (offset, str) => {
    offset = parseInt(offset);
    let result = ""; //variable para la fórmula
    for (let i = 0; i < str.length; i++) {
      let letter = str.charCodeAt(i); //devolviendo el caracter y convirtiendo el texto a codigo ASCII
      if (letter >= 65 && letter <= 90) result += String.fromCharCode((letter - 65 + offset) % 26 + 65);
      // Aplicando formula de conversion mayúsculas por su posición en el código ASCII
      else if (97 <= letter && letter <= 122) result += String.fromCharCode((letter - 97 + offset) % 26 + 97); // Aplicando forumula de conversion minúsculas por su posición en el cógigo ASCII
      else result += str.charAt(i) // Devuelve el primer caracter de la nueva cadena
	}
    return result
  },

  // Descifrado//
  decode: (offset, str) => {
    offset = parseInt(offset);
    let result = ""; //variable para la fórmula
    for (let i = 0; i < str.length; i++) {
      let letter = str.charCodeAt(i); //convirtiendo el texto a codigo ASCII
      if (letter >= 65 && letter <= 90 - offset) result += String.fromCharCode((letter - 65 - offset) % 26 + 65); // Aplicando la fórmula para letras mayúsculas
      else if (((90 - offset) + 1) <= letter && letter <= (90 - offset)) result += String.fromCharCode((letter - 97 - offset) % 26 + 97); // Aplicando la fórmula para letras minúsculas
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

    }

  

