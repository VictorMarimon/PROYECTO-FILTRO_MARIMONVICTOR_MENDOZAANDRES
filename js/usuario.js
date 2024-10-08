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
      for (let y = 0; y < localStorage.length; y++) {
        for (const datosVinilos of valor.vinilos) {
          for (const datosVentas of JSON.parse(localStorage.getItem(localStorage.key(y)))) {
            if(datosVinilos[2] == datosVentas){

              const contenidoPrincipal = document.querySelector('.contenido');


              //funcionalidad de filtrado

              const inputBusqueda = document.getElementById("busqueda");

              inputBusqueda.addEventListener("input", (tecla) => {
                contenidoSeccion.remove();

                //aca con datosVinilos[2] trae el nombre de los vinilos del JSON
                //y inputBUsqueda.value trae el dato que ingresan en el input de busqueda

                //y el método includes permite validar o verificar si el dato del input ingresado se encuentra en los datosVinilos[2]

                if (inputBusqueda.value.length != 0) {
                  if (datosVinilos[2].includes(inputBusqueda.value)) {
                    contenidoSeccion.innerHTML = `
                    <p class="contenido__seccion--titulo">${datosVinilos[2]}<br><span class="contenido__seccion--cantidad"></span></p>
                    <a class="contenido__bottomsheet__objeto--abrir"><img class="contenido__seccion--imagen" src="${datosVinilos[0]}" alt="${datosVinilos[1]}"></a>
                    `;

                    contenidoPrincipal.appendChild(contenidoSeccion);
                  }
                }
              });

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

              contenidoSeccionTitulo.innerText = datosVinilos[2];
              contenidoSeccionImagen.setAttribute('src', datosVinilos[0]);
              contenidoSeccionImagen.setAttribute('alt', datosVinilos[3]); 

              contenidoSeccion.appendChild(contenidoSeccionTitulo);
              contenidoSeccionTitulo.append(espacio, contenidoSeccionTituloVinilo);
              contenidoSeccion.appendChild(contenidoSeccionImagenEnlace);
              contenidoSeccionImagenEnlace.append(contenidoSeccionImagen); 
              contenidoPrincipal.appendChild(contenidoSeccion);

              //aca se valida de que no hayan vinilos duplicados, en vez de eso que se aumente la cantida de este

              const viniloCompradoAgregado = document.getElementsByClassName('contenido__seccion--titulo');

              for (const vinilosComprados of viniloCompradoAgregado) {

                var banderaVinilosComprados = 0;

                if(vinilosComprados.innerText == vinilosComprados.innerText){
                  console.log(datosVentas + " " + 1)
                }

              }
            }
          }
        }  
      }
    }
  },200);
});
