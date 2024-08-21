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

//se agregan los vinilos una vez cargue el documento HTML


document.addEventListener("DOMContentLoaded", (e) => {
  var bandera = 0;
  setTimeout(() => {
    for (const valor of Array(JSON)) {

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
          contenidoSeccionImagenEnlace.setAttribute('href', '#bottomSheet--rock');
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
        

        console.log(valor.sección_compras);
        console.log(bandera)
        bandera++

    }
  },200);
});
