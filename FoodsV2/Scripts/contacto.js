function checkContact() {
    var exp_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var exp_concept = /^[A-Za-z0-9.ñáéíóúÁÉÍÓÚ ]{5,1000}$/;

    var getUrl = window.location;

    if (getUrl.host == "localhost") {
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];//base url en javascript
    } else {
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];//base url en javascript
    }

    var email = document.getElementById("sendemail");
    var concept = document.getElementById("sendconcept");

    var errorEmail = document.getElementById("errorSendEmail");
    var errorConcept = document.getElementById("errorSendConcept");

    if (exp_email.test(email.value)) {
        email.style.borderColor = "rgba(0,0,0,.15)";
        errorEmail.style.visibility = "hidden";

        if (exp_concept.test(concept.value)) {
            concept.style.borderColor = "rgba(0,0,0,.15)";
            errorConcept.style.visibility = "hidden";

			/*contactform.action = baseUrl+"/inicio/contacto";

			contactform.submit();*/

            $.post(baseUrl + "/inicio/contacto",
                {
                    sendemail: email.value,
                    sendconcept: concept.value
                },
                function () {

                    document.getElementById("close").click();

                    $.toast({
                        text: 'El mensaje ha sido enviado correctamente',
                        showHideTransition: 'slide',
                        position: 'top-center',
                        icon: 'info',
                        allowToastClose: false
                    });
                });

        } else {
            //Concepto vacío
            concept.style.borderColor = "red";
            errorConcept.style.visibility = "visible";
            concept.focus();
        }

    } else {
        //Email error o vacío
        email.style.borderColor = "red";
        errorEmail.style.visibility = "visible";
        email.focus();
    }

}

function contactEnter(e) {
    if (e.keyCode == 13) {
        document.getElementById("botoncontact").click();
    }
}