function login() {
    var exp_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var exp_pass = /^\w{5,16}$/;

    var email = document.getElementById("loginemail");
    var pass = document.getElementById("loginpass");

    var errorEmail = document.getElementById("errorEmailLogin");
    var errorPass = document.getElementById("errorPassLogin");
    var errorLogin = document.getElementById("errorLogin");

    if (exp_email.test(email.value)) {
        email.style.borderColor = "rgba(0,0,0,.15)";
        errorEmail.style.visibility = "hidden";
        errorLogin.style.visibility = "hidden";

        if (exp_pass.test(pass.value)) {
            pass.style.borderColor = "rgba(0,0,0,.15)";
            errorPass.style.visibility = "hidden";
            errorLogin.style.visibility = "hidden";

            var xml = new XMLHttpRequest();//compruebo si existe el email con esta peticion ajax

            var getUrl = window.location;
            if (getUrl.host == "localhost") {
                var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];//base url en javascript
            } else {
                var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];//base url en javascript
            }

            xml.open('GET', baseUrl + '/inicio/loginPostComprobar?comprobarEmailLogin=' + email.value + '&comprobarPassLogin=' + md5(pass.value), true);
            xml.send();

            xml.onreadystatechange = function () {
                if (xml.readyState == 4 && xml.status == 200) {

                    var respuesta = (xml.responseText).replace("\n", "");
                    respuesta = respuesta.replace("\r", "");

                    if (respuesta == "no") {//compruebo el resultado del ajax
                        email.style.borderColor = "red";
                        pass.style.borderColor = "red";
                        errorLogin.style.visibility = "visible";
                        email.focus();
                    } else {
                        pass.value = md5(pass.value);
                        loginform.submit();
                    }

                }
            }

        } else {
            //Mal contraseña
            pass.style.borderColor = "red";
            errorPass.style.visibility = "visible";
        }

    } else {
        //MalEmail
        email.style.borderColor = "red";
        errorEmail.style.visibility = "visible";
    }

}

function loginEnter(e) {
    if (e.keyCode == 13) {
        document.getElementById("botonlogin").click();
    }
}

function signEnter(e) {
    if (e.keyCode == 13) {
        document.getElementById("botonsign").click();
    }
}


function registrarse() {
    var exp_signuser = /^[a-zA-Z áéíóúÁÉÍÓÚÑñçÇ]{3,40}$/;
    var exp_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var exp_telefono = /^([89]|[67])\d{8}$/;
    var exp_pass = /^\w{5,16}$/;

    var signuser = document.getElementById("signuser");
    var email = document.getElementById("signemail");
    var telefono = document.getElementById("signtlf");
    var pass = document.getElementById("signpass");
    var repetir_pass = document.getElementById("signpassrepeat");
    var token = document.getElementById("token");

    var errorUser = document.getElementById("errorUser");
    var errorEmail = document.getElementById("errorEmail");
    var errorTlf = document.getElementById("errorTlf");
    var errorPass = document.getElementById("errorPass");
    var errorRepPass = document.getElementById("errorRepPass");

    if (exp_signuser.test(signuser.value)) {
        signuser.style.borderColor = "rgba(0,0,0,.15)";
        errorUser.style.visibility = "hidden";

        if (exp_email.test(email.value)) {
            email.style.borderColor = "rgba(0,0,0,.15)";
            errorEmail.style.visibility = "hidden";

            if (exp_telefono.test(telefono.value)) {
                telefono.style.borderColor = "rgba(0,0,0,.15)";
                errorTlf.style.visibility = "hidden";

                if (exp_pass.test(pass.value)) {//metodo md5 es para encriptar
                    pass.style.borderColor = "rgba(0,0,0,.15)";
                    errorPass.style.visibility = "hidden";

                    if ((md5(pass.value) == md5(repetir_pass.value))) {
                        repetir_pass.style.borderColor = "rgba(0,0,0,.15)";
                        errorRepPass.style.visibility = "hidden";

                        var xml = new XMLHttpRequest();//compruebo si existe el email con esta peticion ajax

                        var getUrl = window.location;
                        if (getUrl.host == "localhost") {
                            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];//base url en javascript
                        } else {
                            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];//base url en javascript
                        }

                        xml.open('GET', baseUrl + '/inicio/signPostComprobar?comprobarEmail=' + email.value, true);
                        xml.send();

                        xml.onreadystatechange = function () {
                            if (xml.readyState == 4 && xml.status == 200) {

                                var respuesta = (xml.responseText).replace("\n", "");
                                respuesta = respuesta.replace("\r", "");

                                if (respuesta == "si") {//compruebo el resultado del ajax
                                    email.style.borderColor = "red";
                                    errorEmail.style.visibility = "visible";
                                    email.focus();
                                } else {
                                    pass.value = md5(pass.value);//encripto la contraseña y se la reasigno al input password para que al hacer el submit recoja el valor encriptado
                                    token.value = md5(email.value + pass.value);
                                    signform.submit();
                                }

                            }
                        }

                    } else {
                        repetir_pass.style.borderColor = "red";
                        errorRepPass.style.visibility = "visible";
                        repetir_pass.focus();
                    }

                } else {
                    //Mal contraseña
                    pass.style.borderColor = "red";
                    errorPass.style.visibility = "visible";
                    pass.focus();
                }

            } else {
                //Mal Telefono
                telefono.style.borderColor = "red";
                errorTlf.style.visibility = "visible";
                telefono.focus();
            }

        } else {
            //Mal Email
            email.style.borderColor = "red";
            errorEmail.style.visibility = "visible";
            email.focus();
        }

    } else {
        //Mal Nombre y contraseña
        signuser.style.borderColor = "red";
        errorUser.style.visibility = "visible";
        signuser.focus();
    }

}