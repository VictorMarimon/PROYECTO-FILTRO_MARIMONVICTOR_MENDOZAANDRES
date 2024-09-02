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

//se agregan los vinilos una vez cargue el documento HTML


document.addEventListener("DOMContentLoaded", (e) => {
  var bandera = 0;
  setTimeout(() => {
    for (const valor of Array(JSONdatos)) {

        //se estructura el html nuevo de cada vinilo 
        // para que luego sea cargado en el sitio web
        
        for (const vinilos of valor.sección_compras) {
          const contenidoPrincipal = document.querySelector('.contenido');

          const contenidoSeccion =  document.createElement('div');
          const contenidoSeccionTitulo = document.createElement('p');
          const contenidoSeccionTituloVinilo = document.createElement('span');
          const contenidoSeccionImagenEnlace =  document.createElement('a');
          const contenidoSeccionImagen = document.createElement('img');
          const espacio = document.createElement('br');

          contenidoSeccion.classList.add('contenido__seccion');
          contenidoSeccionTitulo.classList.add('contenido__seccion--titulo');
          contenidoSeccionTituloVinilo.classList.add('contenido__seccion--cantidad');
          contenidoSeccionImagenEnlace.classList.add('contenido__bottomsheet__objeto--abrir');
          contenidoSeccionImagen.classList.add('contenido__seccion--imagen');

          contenidoSeccionTitulo.innerText = vinilos[0];
          contenidoSeccionTituloVinilo.innerText = vinilos[1];
          contenidoSeccionImagen.setAttribute('src', vinilos[2]);
          contenidoSeccionImagen.setAttribute('alt', vinilos[3]); 

          contenidoSeccion.appendChild(contenidoSeccionTitulo);
          contenidoSeccionTitulo.append(espacio, contenidoSeccionTituloVinilo);
          contenidoSeccion.appendChild(contenidoSeccionImagenEnlace);
          contenidoSeccionImagenEnlace.append(contenidoSeccionImagen); 
          contenidoPrincipal.appendChild(contenidoSeccion);
        }
        
        bandera++

        function vinilosLocalStorage(tipoVinilo){
          const bottomsheetPrincipal = document.getElementById('bottomSheet');
          const vinilosBottomsheet = document.createElement('div');

          vinilosBottomsheet.classList.add('contenido__bottomsheet__objeto');

          var banderaVinilosLocalStorage = 0;

          for (let y = 0; y < localStorage.length; y++) {
            for (const datosJSON of valor.vinilos) {

              if(datosJSON[2] == JSON.parse(localStorage.getItem(localStorage.key(y)))[0]){
                if(datosJSON[1] == tipoVinilo){
                  vinilosBottomsheet.innerHTML = `
                    <a href="#" class="contenido__bottomsheet__objeto--cerrar">X</a>
                    <h2>Vinilos POP</h2>
                    <div class="contenido__bottomsheet__objeto__vinilo">
                        <img class="contenido__bottomsheet__objeto__vinilo--imagen" src="${datosJSON[0]}" alt="logo de rolling stones">
                        <p>${datosJSON[1]}</p>
                    </div>
                  `;

                  bottomsheetPrincipal.append(vinilosBottomsheet);
                }
              }

              banderaVinilosLocalStorage++;
            }
            
          }
        }
        
            //aca falta llenar el bottomsheet con los datos del JSON

            const seccionSeleccionada = document.getElementsByClassName('contenido__seccion--imagen');

            for (const secciones of seccionSeleccionada) {
              secciones.parentElement.parentElement.addEventListener('click',()=>{

                const bottomsheetPrincipal = document.getElementById('bottomSheet');

                if(secciones.getAttribute('alt') == 'imagen de disco rock'){
                  secciones.parentElement.setAttribute('href', '#bottomSheet');

                  vinilosLocalStorage('imagen de disco rock');
                  console.log('vinilos de rock')
                }else if(secciones.getAttribute('alt') == 'imagen de disco salsa'){
                  secciones.parentElement.setAttribute('href', '#bottomSheet');
                  vinilosLocalStorage('imagen de disco salsa');
                  console.log('vinilos de salsa')
                }else if(secciones.getAttribute('alt') == 'imagen de disco bachata'){
                  secciones.parentElement.setAttribute('href', '#bottomSheet');
                  console.log('vinilos de bachata')
                }else if(secciones.getAttribute('alt') == 'imagen de disco cumbia'){
                  secciones.parentElement.setAttribute('href', '#bottomSheet');
                  vinilosLocalStorage('imagen de disco cumbia');
                  console.log('vinilos de cumbia')
                }else if(secciones.getAttribute('alt') == 'imagen de disco vallenato'){
                  secciones.parentElement.setAttribute('href', '#bottomSheet');
                  console.log('vinilos de vallenato')
                }else if(secciones.getAttribute('alt') == 'imagen de disco pop'){
                  secciones.parentElement.setAttribute('href', '#bottomSheet');
                  console.log('vinilos de pop')
                }

                bottomsheetPrincipal.removeChild;

              })
            }

    }
  },200);
});
