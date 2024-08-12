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

//Dinamismo del modal (principal.html)

const vinilo = document.getElementsByClassName('contenido__sección');
const imagenVinilo = document.getElementsByClassName('contenido__sección__imagen');


for (const valor of imagenVinilo) {
    valor.addEventListener('click', ()=>{
        
    });
}