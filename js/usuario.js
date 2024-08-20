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
  setTimeout(() => {
    for (const valor of Array(JSON)) {
        console.log(valor.vinilos)
    }
  },200);
});
