function isNumber(text){

	var numeros="0123456789";
	var q = true;

	for (var i = 0; i < text.length; i++) {

		(numeros.search(text.substr(i,1)) == -1) ?  q = false : console.log("hola");
	}

	return q;
}

function isWord(text){

	var letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚ ";
	var q = true;

	for (var i = 0; i < text.length; i++) {

		(letras.search(text.substr(i,1)) == -1) ?  q = false : console.log("hola");
	}

	return q;
}

function isAlphaNumeric(text){

	var letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789,.ºªáéíóúÁÉÍÓÚ ";
	var q = true;

	for (var i = 0; i < text.length; i++) {

		(letras.search(text.substr(i,1)) == -1) ?  q = false : console.log("3");
	}

	return q;
}

function isNumberR(text){

	var expregular = /^\d*$/
	var q = true;

	if (!expregular.test(text)) {
		q = false
	}

	return q;
}

function isWordR(text){

	var expregular = /^[a-zA-Zñçáéíóú ]*$/
	var q = true;

	if (!expregular.test(text)) {
		q = false
	}

	return q;
}

function isAlphaNumericR(text){

	var expregular = /^[\wñ,.ºªáéíóúÁÉÍÓÚ ]*$/
	var q = true;

	if (!expregular.test(text)) {
		q = false
	}

	return q;
}


function replaceAll( text, busca, reemplaza ){

	if (busca != "" && reemplaza != "") {

	  while (text.toString().indexOf(busca) != -1)

	      text = text.toString().replace(busca,reemplaza);

	  return text;
	}else{
		return text;
	}
}

function peticionAjax(metodo, idcontenido, buscar, reemplazar, fichero, parametros=""){

	var xmlhttp = new XMLHttpRequest();

	if (metodo == "get") {

		if (parametros == "") {
			xmlhttp.open("GET",fichero,true);
		}else{
			xmlhttp.open("GET",fichero+"?"+parametros,true);
		}
 	
 		xmlhttp.send();

	}else if(metodo == "post"){

		xmlhttp.open("POST",fichero,true);
 		//xmlhttp.setRequestHeader("X-Request-With", "XMLHttpRequest"); //para procesamiento XML y otros
	 	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //Para ficheros php
	 	
	 	(parametros=="") ? xmlhttp.send() : xmlhttp.send(parametros);

	}

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {

			document.getElementById(idcontenido).innerHTML=replaceAll(xmlhttp.responseText, buscar, reemplazar);
		}
	}
}

function peticionAjaxXML(metodo, idcontenido, buscar, reemplazar, etiqueta, posicion, hijo, fichero, parametros=""){

	var xmlhttp = new XMLHttpRequest();

	if (metodo == "get") {

		if (parametros == "") {
			xmlhttp.open("GET",fichero,true);
		}else{
			xmlhttp.open("GET",fichero+"?"+parametros,true);
		}
 	
 		xmlhttp.send();

	}else if(metodo == "post"){

		xmlhttp.open("POST",fichero,true);
 		xmlhttp.setRequestHeader("X-Request-With", "XMLHttpRequest"); //para procesamiento XML y otros
	 	//xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //Para ficheros php
	 	
	 	(parametros=="") ? xmlhttp.send() : xmlhttp.send(parametros);

	}

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {

			var xml = xmlhttp.responseXML.getElementsByTagName(etiqueta)[posicion];

			alert(xml.childNodes[hijo].nodeValue);

			document.getElementById(idcontenido).innerHTML=replaceAll(xml.childNodes[hijo].nodeValue, buscar, reemplazar);

		}
	}
}

function obtenerwidthimagen(imagen){
	setTimeout(function(){alert(imagen.width);}, 1000);
}

function obtenerheigthimagen(imagen){
	setTimeout(function(){alert(imagen.height);}, 1000);
}

function obtenervalorradiobutton(name){

	var radio = document.getElementsByName(name);
	var resultado;

	for (var i = 0; i < radio.length; i++) {

		if (radio[i].checked) {
			resultado = radio[i].value;
		}
	}

	return resultado;
}