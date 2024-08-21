//BASE DE DATOS

let JSON;

fetch("../json/datos.json")
  .then((res) => {
    if (!res.ok) {
      console.error("Error al cargar el archivo JSON");
      console.log(res);
    }
    return res.json();
  })
  .then((datos) => {
    JSON = datos;
  })
  .catch((res) => {
    console.error("Hubo un error en el JSON " + res);
  });


const nombreUsuario = document.querySelector('.cabecera__datos--nombre');
const fotoUsuario = document.querySelector('.cabecera__datos--nombre');
  
const actualizaciónDatos = document.querySelector('.contenido__bottomsheet__objeto__datos--boton');

actualizaciónDatos.addEventListener('click', ()=>{
    const nombreNuevo = document.getElementById('datoNombre');
    const fotoNueva = document.getElementById('datoFoto');
    const nickNuevo = document.getElementById('datoNick');

    for (const datos of Array(JSON)) {
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

    nickNuevo.value = "";
    nombreNuevo.value = "";
    fotoNueva.value = "";
});