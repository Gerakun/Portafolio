export function valida(input) {
    const tipoDeImput = input.dataset.tipo
 
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{ 
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeImput, input);    
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo Nombre y apellido no puede estar vacío"
    },
    email: {
        valueMissing: "El campo Email no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    
    telefono: {
        valueMissing: "El campo de Teléfono no puede estar vacío",
        patternMismatch: "El formato requerido es de 10 números (XXX)XXX-XXXX."
    },
    asunto: {
        valueMissing: "El campo de Asunto no puede estar vacío",
        patternMismatch: "El asunto debe contener entre 4 y 30 caracteres."
    }
   
}


function mostrarMensajeDeError(tipoDeImput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error =>{
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeImput][error];
        }
    })

    return mensaje;
}

export function validaMensaje(textarea) {
    const tipoDeTextarea = textarea.dataset.tipo
    if (textarea.validity.valid){
        textarea.parentElement.classList.remove("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-message-error").innerHTML = "";
    }else{ 
        textarea.parentElement.classList.add("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-message-error").innerHTML = mostrarErrorMensaje(tipoDeTextarea,textarea);   
    }

}

const tiposDeErrores = [
    "valueMissing",
    "tooShort",
]

const errorMensaje = {
    textoMensaje:{
        valueMissing: "Por favor agregue un mensaje para poder enviar",
         tooShort: "El Mensaje debe contener entre 10 y 300 caracteres.",

    }
}

function mostrarErrorMensaje(tipoDeTextarea, textarea) {
    let message = ""
    tiposDeErrores.forEach(error =>{
        if(textarea.validity[error]){
            console.log(tipoDeTextarea, error);
            console.log(textarea.validity[error]);
            console.log(errorMensaje[tipoDeTextarea][error]);
            message = errorMensaje[tipoDeTextarea][error];
        }
    }) 


    return message
}
