//BASE DE DATOS

let JSONdatos;

fetch("../json/datos.json")
  .then((res) => {
    if (!res.ok) {
      console.error("Error al cargar el archivo JSON");
      console.log(res);
    }
    return res.json();
  })
  .then((datos) => {
    JSONdatos = datos;
  })
  .catch((res) => {
    console.error("Hubo un error en el JSON " + res);
  });


document.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    //aca se traen los datos del JSON del usuario para cargarlos en los elementos inputs
    const contenidoGestiónDatos = document.querySelector('.contenido__bottomsheet__objeto__datos');
    const datosUsuario = document.querySelector('.cabecera__datos');

    for (const datos of Array(JSONdatos)){
      contenidoGestiónDatos.querySelector('#datoNombre').value = datos.usuario[0][0];
      contenidoGestiónDatos.querySelector('#datoNick').value = datos.usuario[0][2];
      contenidoGestiónDatos.querySelector('#datoFoto').value = datos.usuario[0][1];

      datosUsuario.querySelector('.cabecera__datos--imagen').setAttribute('src', datos.usuario[0][1]);
      datosUsuario.querySelector('.cabecera__datos--nombre').innerText = datos.usuario[0][0];
      datosUsuario.querySelector('.cabecera__datos--usuario').innerText = datos.usuario[0][2];
    }


  },200)  
})

const nombreUsuario = document.querySelector('.cabecera__datos--nombre');
const fotoUsuario = document.querySelector('.cabecera__datos--nombre');
  
const actualizaciónDatos = document.querySelector('.contenido__bottomsheet__objeto__datos--boton');

actualizaciónDatos.addEventListener('click', ()=>{
    const nombreNuevo = document.getElementById('datoNombre');
    const fotoNueva = document.getElementById('datoFoto');
    const nickNuevo = document.getElementById('datoNick');

    //se valida que el usuario ingrese los datos

    setTimeout(()=>{
      for (const datos of Array(JSONdatos)) {
          if(nombreNuevo.value.length > 0){
              datos.usuario[0][0] = nombreNuevo.value;
          }else if(fotoNueva.value.length > 0){
              datos.usuario[0][1] = fotoNueva.value;
          }else if(nickNuevo.value.length > 0){
              datos.usuario[0][2] = nickNuevo.value;
          }else if(fotoNueva.value.length == 0 && nombreNuevo.value.length == 0 && nickNuevo.value.length == 0){
              alert('Debes ingresar al menos un dato')
              break
          }
          return datos;
      }
    },200)
});