//Verificación de inicio de sesión

const user = document.querySelector('#username');
const password = document.getElementById('password');
const btnInicioSesion = document.getElementById('btnInicioSesión');

const USUARIO = "2024";
const CONTRASEÑA = "2024";

btnInicioSesion.addEventListener('click',()=>{
    if(user.value === USUARIO && password.value === CONTRASEÑA){
        var ingreso = document.getElementById('btnInicioSesión');
        ingreso.setAttribute('href', '/html/principal.html');
    }else{
        alert("Credenciales incorrectas");
    }
});