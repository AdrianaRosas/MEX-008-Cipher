window.cipher = {
	encode: (string,offset) => {
		let msgCipher = ""//mensaje recibido
		for(let i = 0; i < string.length; i++){ //Para los valores insertados
			if(string.charCodeAt(i) === 32){ //identificacion de espacios vacios
				msgCipher += " ";
			}else{
				let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65; //aplicando formula de cifrado
				msgCipher+=String.fromCharCode(textChar); //para convertir el texto en minusculas
			}
		}
		console.log(textChar)
		return msgCipher; //retornar respuesta
	},
	decode: (string,offset) => { 
		let msgDecipher = ""; //mensaje recibido
		for(let i = 0; i < string.length; i++){ //inicio recorrido de caracteres
			if(string.charCodeAt(i) === 32){ //identificacion de espacios vacios
				msgDecipher += " ";
			}else{
				let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65; //aplicando formula de decifrado
				msgDecipher += String.fromCharCode(textChar); //conviertiendo el texto decifrado en minusculas
			}
		}
		return msgDecipher; //retornar respuesta
	}
}