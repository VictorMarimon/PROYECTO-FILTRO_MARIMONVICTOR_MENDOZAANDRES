//Verificación de inicio de sesión

const user = document.querySelector('#username');
const password = document.getElementById('password');
const btnInicioSesion = document.getElementById('btnInicioSesión');

const USUARIO = "USER1";
const CONTRASEÑA = "2024USER";

btnInicioSesion.addEventListener('click',()=>{
    if(user.value === USUARIO && password.value === CONTRASEÑA){
        var ingreso = document.getElementById('btnInicioSesión');
        ingreso.setAttribute('href', '/html/principal.html');
    }else{
        alert("Credenciales incorrectas");
    }
});