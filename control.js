const formulario = document.querySelector('#formulario');
const usuario = document.querySelector('#usuario');
const pass = document.querySelector('#password');


eventListeners();

function eventListeners() {

    formulario.addEventListener('submit', validarFormulario);
    usuario.addEventListener('blur', validarCampo);
    pass.addEventListener('blur', validarCampo);
}

function validarFormulario(e) {
    e.preventDefault();

    if(usuario.value === '' || pass.value === '') {
        usuario.classList.add('border-red');
        pass.classList.add('border-red');
        window.alert("Ambos campos son obligatorios");
        return;
    } else if(usuario.value.indexOf("@") < 1) {
        usuario.classList.add('border-red');
        pass.classList.remove('border-red');
        pass.classList.add('border-green');
        window.alert("El email no es válido");
        return;
    } else {
        usuario.classList.remove('border-red');
        pass.classList.remove('border-red');
        usuario.classList.add('border-green');
        pass.classList.add('border-green');
        window.alert("Login correcto!");
        return;
    }
}

function validarCampo() {
    if(usuario.value.indexOf("@") > -1 && pass.value.length > 0) {
        usuario.classList.remove('border-red');
        usuario.classList.add('border-green');
        pass.classList.remove('border-red');
        pass.classList.add('border-green');
        
    } // else {
    //     usuario.classList.remove('border-red');
    //     pass.classList.remove('border-red');
    //     usuario.classList.add('border-green');
    //     pass.classList.add('border-green');
    // }
}
