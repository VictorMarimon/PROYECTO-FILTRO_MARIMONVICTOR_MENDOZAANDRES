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
  setTimeout(() => {
    for (const valor of Array(JSONdatos)) {
      for (const vinilosBD of valor.vinilos) {
        //cuando se carga el html de la página se crean los vinilos del sitio web uno por uno

        const conteniPagPrincipal = document.getElementById(
          "contenido_principal"
        );

        const viniloNuevo = document.createElement("div");
        const imagenViniloNuevo = document.createElement("img");
        const descripcionViniloNuevo = document.createElement("p");
        const imagenViniloNuevoModal = document.createElement("a");
        const precioViniloNuevo = document.createElement("label");
        const signoViniloNuevo = document.createElement("span");

        viniloNuevo.classList.add("contenido__sección");

        imagenViniloNuevo.classList.add("contenido__sección__imagen");
        imagenViniloNuevo.setAttribute("src", vinilosBD[0]);
        imagenViniloNuevo.setAttribute("alt", vinilosBD[1]);

        imagenViniloNuevoModal.append(imagenViniloNuevo);

        descripcionViniloNuevo.classList.add("contenido__sección__descripción");
        descripcionViniloNuevo.innerText = vinilosBD[2];

        signoViniloNuevo.classList.add("contenido__sección--peso");
        signoViniloNuevo.innerText = "$";

        precioViniloNuevo.appendChild(signoViniloNuevo);
        precioViniloNuevo.innerText = "$ " + vinilosBD[3];

        viniloNuevo.append(imagenViniloNuevoModal);
        viniloNuevo.append(descripcionViniloNuevo);
        viniloNuevo.append(precioViniloNuevo);

        conteniPagPrincipal.appendChild(viniloNuevo);

        //Dinamismo del modal (principal.html)

        const modal = document.getElementById("modal");

        //aca cuando se clickee sobre la imágen el modal se creara para cada uno de los vinilos

        imagenViniloNuevoModal.addEventListener("click", (e) => {
          imagenViniloNuevoModal.setAttribute("href", "#modal");

          const modalIndividual = modal.querySelector("div").querySelector("p");
          const imagenIndividual = document.body
            .querySelector("#modal")
            .querySelector(".modal__contenido")
            .querySelector(".modal__image");
          const imagenIndividualNueva = document.createElement("img");

          //se pasan los datos del JSON al modal de su respectivo vinilo

          for (let i = 0; i < 14; i++) {
            if (
              valor.vinilosModal[i][1] == imagenViniloNuevo.getAttribute("src")
            ) {
              imagenIndividualNueva.setAttribute(
                "src",
                valor.vinilosModal[i][3]
              );
              imagenIndividualNueva.setAttribute(
                "alt",
                valor.vinilosModal[i][2]
              );
              imagenIndividualNueva.classList.add("modal__perfil--imagen");
              modalIndividual.textContent = valor.vinilosModal[i][0];
              imagenIndividual.setAttribute("src", valor.vinilosModal[i][1]);
              imagenIndividual.setAttribute("alt", valor.vinilosModal[i][2]);
              modalIndividual.append(imagenIndividualNueva);
              break;
            }
          }
        });

        //Aca agregamos dinamismo al nav de la página principal
        const popVinilo = document.querySelector(".navegación__enlace--pop");
        const bachataVinilo = document.querySelector(
          ".navegación__enlace--bachata"
        );
        const salsaVinilo = document.querySelector(
          ".navegación__enlace--salsa"
        );
        const cumbiaVinilo = document.querySelector(
          ".navegación__enlace--cumbia"
        );
        const clasicaVinilo = document.querySelector(
          ".navegación__enlace--clasica"
        );
        const vallenatoVinilo = document.querySelector(
          ".navegación__enlace--vallenato"
        );

        //La siguiente función recibe como parametro la categoria
        //que permite identificar los vinilos y colocarlos en la categoria seleccionada

        function categoria(category) {
          const conteniPagPrincipal = document.getElementById(
            "contenido_principal"
          );

          const vinilosActuales = document.querySelectorAll(
            ".contenido__sección"
          );

          for (const viniloEliminado of vinilosActuales) {
            viniloEliminado.remove();
          }

          for (let i = 0; i < 14; i++) {
            if (valor.vinilos[i][1] == category) {
              const viniloCategoria = document.createElement("div");
              const imagenViniloCategoria = document.createElement("img");
              const descripcionViniloCategoria = document.createElement("p");
              const signoViniloCategoria = document.createElement("span");
              const precioViniloCategoria = document.createElement("label");
              const imagenViniloNuevoModalCaategoria =
                document.createElement("a");

              viniloCategoria.classList.add("contenido__sección");

              imagenViniloCategoria.classList.add("contenido__sección__imagen");
              imagenViniloCategoria.setAttribute("src", valor.vinilos[i][0]);
              imagenViniloCategoria.setAttribute("alt", valor.vinilos[i][1]);

              descripcionViniloCategoria.classList.add(
                "contenido__sección__descripción"
              );
              descripcionViniloCategoria.innerText = valor.vinilos[i][2];

              imagenViniloNuevoModalCaategoria.append(imagenViniloCategoria);

              signoViniloCategoria.classList.add("contenido__sección--peso");
              signoViniloCategoria.innerText = "$";

              precioViniloCategoria.appendChild(signoViniloCategoria);
              precioViniloCategoria.innerText = "$ " + valor.vinilos[i][3];

              viniloCategoria.append(imagenViniloNuevoModalCaategoria);
              viniloCategoria.append(descripcionViniloCategoria);
              viniloCategoria.append(precioViniloCategoria);

              conteniPagPrincipal.append(viniloCategoria);

              //se crea el modal para cada categoria
              imagenViniloCategoria.addEventListener("click", (e) => {
                imagenViniloNuevoModalCaategoria.setAttribute("href", "#modal");

                const modalIndividual = modal
                  .querySelector("div")
                  .querySelector("p");
                const imagenIndividual = document.body
                  .querySelector("#modal")
                  .querySelector(".modal__contenido")
                  .querySelector(".modal__image");
                const imagenIndividualNueva = document.createElement("img");

                //se pasan los datos del JSON al modal de su respectivo vinilo

                for (let z = 0; z < 14; z++) {
                  if (
                    valor.vinilosModal[z][1] ==
                    imagenViniloCategoria.getAttribute("src")
                  ) {
                    imagenIndividualNueva.setAttribute(
                      "src",
                      valor.vinilosModal[z][3]
                    );
                    imagenIndividualNueva.setAttribute(
                      "alt",
                      valor.vinilosModal[z][2]
                    );
                    imagenIndividualNueva.classList.add(
                      "modal__perfil--imagen"
                    );
                    modalIndividual.textContent = valor.vinilosModal[z][0];
                    imagenIndividual.setAttribute(
                      "src",
                      valor.vinilosModal[z][1]
                    );
                    imagenIndividual.setAttribute(
                      "alt",
                      valor.vinilosModal[z][2]
                    );
                    modalIndividual.append(imagenIndividualNueva);
                    break;
                  }
                }
              });
            }
          }
        }

        popVinilo.addEventListener("click", (e) => {
          //en esta parte quitamos el resaltado de las categorias
          const nav = document.getElementsByClassName(
            "navegación__enlace--activado"
          );

          for (const etiqueta of nav) {
            etiqueta.classList.remove("navegación__enlace--activado");
          }
          popVinilo.classList.add("navegación__enlace--activado");
          categoria("imagen de disco pop");
        });

        bachataVinilo.addEventListener("click", (e) => {
          const nav = document.getElementsByClassName(
            "navegación__enlace--activado"
          );

          for (const etiqueta of nav) {
            etiqueta.classList.remove("navegación__enlace--activado");
          }
          bachataVinilo.classList.add("navegación__enlace--activado");
          categoria("imagen de disco bachata");
        });

        salsaVinilo.addEventListener("click", (e) => {
          const nav = document.getElementsByClassName(
            "navegación__enlace--activado"
          );

          for (const etiqueta of nav) {
            etiqueta.classList.remove("navegación__enlace--activado");
          }
          salsaVinilo.classList.add("navegación__enlace--activado");
          categoria("imagen de disco salsa");
        });

        cumbiaVinilo.addEventListener("click", (e) => {
          const nav = document.getElementsByClassName(
            "navegación__enlace--activado"
          );

          for (const etiqueta of nav) {
            etiqueta.classList.remove("navegación__enlace--activado");
          }
          cumbiaVinilo.classList.add("navegación__enlace--activado");
          categoria("imagen de disco cumbia");
        });

        clasicaVinilo.addEventListener("click", (e) => {
          const nav = document.getElementsByClassName(
            "navegación__enlace--activado"
          );

          for (const etiqueta of nav) {
            etiqueta.classList.remove("navegación__enlace--activado");
          }
          clasicaVinilo.classList.add("navegación__enlace--activado");
          categoria("imagen de disco rock");
        });

        vallenatoVinilo.addEventListener("click", (e) => {
          const nav = document.getElementsByClassName(
            "navegación__enlace--activado"
          );

          for (const etiqueta of nav) {
            etiqueta.classList.remove("navegación__enlace--activado");
          }
          vallenatoVinilo.classList.add("navegación__enlace--activado");
          categoria("imagen de disco vallenato");
        });

        //aca se limpia la variable artista porque al ser una variable de tipo string
        //lo que pasa es que se agrega de la siguiente manera
        //artista_1
        //artista_12
        //artista_123
        //se limpia el numero final para evitar un posible error al crear cada vinilo
        artista = "artista_";
      }
    }
  }, 200);
});

const añadirCarrito = document.getElementsByClassName("modal__logo--3");
const quitarCarrito = document.getElementsByClassName(
  "contenido__bottomsheet__objeto__vinilo--boton"
);
var total = 0;
var cantidadVinilo = 1;

//aca agrego los productos al carrito
//ademas falta agregar el evento a los botones de cancelar pedido y pagar
for (const agregar of añadirCarrito) {
  agregar.addEventListener("click", () => {
    const carritoObjeto = document.querySelector(
      ".contenido__bottomsheet__objeto"
    );
    const productoCarrito = document.querySelector("hr");
    const productoCarritoPrecio = document.querySelector("#totalCarrito");

    const productoNuevoCarrito = document.createElement("div");
    const productoImagenNuevoCarrito = document.createElement("img");
    const productoDescripcionNuevoCarrito = document.createElement("p");
    const productoPrecioNuevoCarrito = document.createElement("p");
    const productoCantidadNuevoCarrito = document.createElement("p");
    const productoNuevoCarritoBotonEliminar = document.createElement("button");

    productoNuevoCarrito.classList.add(
      "contenido__bottomsheet__objeto__vinilo"
    );

    productoImagenNuevoCarrito.classList.add("productoImagenNuevoCarrito");
    productoNuevoCarritoBotonEliminar.classList.add(
      "contenido__bottomsheet__objeto__vinilo--boton"
    );

    productoCantidadNuevoCarrito.setAttribute("id", "cantidad");

    const viniloSeleccionado = document.querySelector(".modal__image");

    //aca se agregan los datos al HTMl del JSON

    for (const valor of Array(JSONdatos)) {
      for (let i = 0; i < 14; i++) {
        if (viniloSeleccionado.getAttribute("src") == valor.vinilos[i][0]) {
          productoImagenNuevoCarrito.setAttribute("src", valor.vinilos[i][0]);
          productoImagenNuevoCarrito.setAttribute("alt", valor.vinilos[i][1]);
          productoDescripcionNuevoCarrito.innerText = valor.vinilos[i][2];
          productoPrecioNuevoCarrito.innerText = valor.vinilos[i][3];
          productoCantidadNuevoCarrito.innerText = cantidadVinilo;
          productoNuevoCarrito.setAttribute("id", valor.vinilos[i][2]);
          cantidadVinilo++;
          break;
        }
      }
    }

    productoImagenNuevoCarrito.classList.add(
      "contenido__bottomsheet__objeto__vinilo--imagen"
    );

    productoNuevoCarritoBotonEliminar.innerText = "eliminar";

    productoNuevoCarrito.append(productoImagenNuevoCarrito);
    productoNuevoCarrito.append(productoDescripcionNuevoCarrito);
    productoNuevoCarrito.append(productoPrecioNuevoCarrito);
    productoNuevoCarrito.append(productoCantidadNuevoCarrito);
    productoNuevoCarrito.append(productoNuevoCarritoBotonEliminar);

    //se hace la contabilización de la cantidad por el precio de cada vinilo
    total =
      total +
      Number(productoPrecioNuevoCarrito.innerText) *
      Number(productoCantidadNuevoCarrito.innerText);

    //la variable se refiere más que todo a los vinilos que se agregaban y se duplicaban
    //ya que eso no debe pasar, solo debe aumentar la cantidad y no deben duplicarse los vinilos
    var viniloParaEliminar = document.getElementsByClassName(
      "contenido__bottomsheet__objeto__vinilo"
    );

    //en esta parte del codigo solamente se modifican los datos
    //ya que se hace la respectiva verificación de si el vinilo existe
    //esta verificación se realiza mediante el id del div que contiene el vinilo
    for (let first of viniloParaEliminar) {
      if (first.getAttribute("id") == productoNuevoCarrito.getAttribute("id")) {
        productoCantidadNuevoCarrito.innerText =
          Number(first.querySelector("#cantidad").innerText) + 1;
        carritoObjeto.removeChild(first);
        break;
      }
    }

    //esta validación permite que cuando no hayan vinilos el total sea cero
    //anteriormente tenia errores y me daba saldos negativos lo cual es ilogico
    //pero con esta validación tambien se evita esos errores
    if (total < 0) {
      productoCarritoPrecio.innerText = "TOTAL: 0";
    } else {
      productoCarritoPrecio.innerText = "TOTAL: " + total;
    }

    productoCarrito.after(productoNuevoCarrito);

    //aca elimino los productos del carrito
    //se realiza la misma validación cuando ya el vinilo está agregado
    //esto mediante el id para evitar eliminaciones a otro vinilos
    var banderaProductoEliminado = 0;
    for (const quitar of quitarCarrito) {
      quitar.addEventListener("click", () => {
        for (const viniloEliminado of viniloParaEliminar) {
          if (
            viniloEliminado.getAttribute("id") == productoNuevoCarrito.getAttribute("id")
          ) {
            viniloEliminado.remove();
            total =
              total -
              Number(productoPrecioNuevoCarrito.innerText) *
              Number(productoCantidadNuevoCarrito.innerText);
            productoCarritoPrecio.innerText = "TOTAL: " + total;
            banderaProductoEliminado++;
            break;
          }
        }
      });
      break;
    }
    cantidadVinilo = 1;
  });
}


const botonCancelarPedido = document.querySelector('.contenido__bottomsheet__objeto--botonCancelar');

botonCancelarPedido.addEventListener('click', () => {
  var vinilos = document.getElementsByClassName('contenido__bottomsheet__objeto__vinilo');
  var totalPrecio = document.getElementById('totalCarrito');

  for (let i in vinilos) {
    for (const viniloEliminado of vinilos) {
      viniloEliminado.remove();
      totalPrecio.innerText = "TOTAL: 0";
    }
  }

});

//en esta parte lo que hago es borrar el contenido de la página (vinilos)
//y volverlos agregar
//¿porque?
//porque si en el html le coloco el atributo href="index.html"
//la página se actualiza, peroooo los datos del carrito se eliminan, eso quiere decir que tambien se actualizan
//entonces con estas lineas de codigo en el boton TODO e INICIO evito que los vinilos del carrito se eliminen
const botonInicio = document.getElementById('inicio');
var vinilosPagina = document.getElementsByClassName('contenido__sección');

botonInicio.addEventListener('click', (e) => {
  for (let x in vinilosPagina) {
    for (let viniloPaginaEliminado of vinilosPagina) {
      viniloPaginaEliminado.remove()
    }
  }
  setTimeout(() => {
    for (const valor of Array(JSONdatos)) {
      for (const vinilosBD of valor.vinilos) {
        //cuando se carga el html de la página se crean los vinilos del sitio web uno por uno

        const conteniPagPrincipal = document.getElementById(
          "contenido_principal"
        );

        const viniloNuevo = document.createElement("div");
        const imagenViniloNuevo = document.createElement("img");
        const descripcionViniloNuevo = document.createElement("p");
        const imagenViniloNuevoModal = document.createElement("a");
        const precioViniloNuevo = document.createElement("label");
        const signoViniloNuevo = document.createElement("span");

        viniloNuevo.classList.add("contenido__sección");

        imagenViniloNuevo.classList.add("contenido__sección__imagen");
        imagenViniloNuevo.setAttribute("src", vinilosBD[0]);
        imagenViniloNuevo.setAttribute("alt", vinilosBD[1]);

        imagenViniloNuevoModal.append(imagenViniloNuevo);

        descripcionViniloNuevo.classList.add("contenido__sección__descripción");
        descripcionViniloNuevo.innerText = vinilosBD[2];

        signoViniloNuevo.classList.add("contenido__sección--peso");
        signoViniloNuevo.innerText = "$";

        precioViniloNuevo.appendChild(signoViniloNuevo);
        precioViniloNuevo.innerText = "$ " + vinilosBD[3];

        viniloNuevo.append(imagenViniloNuevoModal);
        viniloNuevo.append(descripcionViniloNuevo);
        viniloNuevo.append(precioViniloNuevo);

        conteniPagPrincipal.appendChild(viniloNuevo);

        //Dinamismo del modal (principal.html)

        const modal = document.getElementById("modal");

        //aca cuando se clickee sobre la imágen el modal se creara para cada uno de los vinilos

        imagenViniloNuevoModal.addEventListener("click", (e) => {
          imagenViniloNuevoModal.setAttribute("href", "#modal");

          const modalIndividual = modal.querySelector("div").querySelector("p");
          const imagenIndividual = document.body
            .querySelector("#modal")
            .querySelector(".modal__contenido")
            .querySelector(".modal__image");
          const imagenIndividualNueva = document.createElement("img");

          //se pasan los datos del JSON al modal de su respectivo vinilo

          for (let i = 0; i < 14; i++) {
            if (
              valor.vinilosModal[i][1] == imagenViniloNuevo.getAttribute("src")
            ) {
              imagenIndividualNueva.setAttribute(
                "src",
                valor.vinilosModal[i][3]
              );
              imagenIndividualNueva.setAttribute(
                "alt",
                valor.vinilosModal[i][2]
              );
              imagenIndividualNueva.classList.add("modal__perfil--imagen");
              modalIndividual.textContent = valor.vinilosModal[i][0];
              imagenIndividual.setAttribute("src", valor.vinilosModal[i][1]);
              imagenIndividual.setAttribute("alt", valor.vinilosModal[i][2]);
              modalIndividual.append(imagenIndividualNueva);
              break;
            }
          }
        });

        //aca se limpia la variable artista porque al ser una variable de tipo string
        //lo que pasa es que se agrega de la siguiente manera
        //artista_1
        //artista_12
        //artista_123
        //se limpia el numero final para evitar un posible error al crear cada vinilo
        artista = "artista_";
      }
    }
  }, 200);
});

const botonTodo = document.getElementById('todo');

botonTodo.addEventListener('click', (e) => {
  for (let x in vinilosPagina) {
    for (let viniloPaginaEliminado of vinilosPagina) {
      viniloPaginaEliminado.remove()
    }
  }

  const elementoTODO = document.querySelector('.navegación__enlace--todo');
  const nav = document.getElementsByClassName(
    "navegación__enlace--activado"
  );

  for (const etiqueta of nav) {
    etiqueta.classList.remove("navegación__enlace--activado");
  }

  elementoTODO.classList.add('navegación__enlace--activado');


  setTimeout(() => {
    for (const valor of Array(JSONdatos)) {
      for (const vinilosBD of valor.vinilos) {
        //cuando se carga el html de la página se crean los vinilos del sitio web uno por uno

        const conteniPagPrincipal = document.getElementById(
          "contenido_principal"
        );

        const viniloNuevo = document.createElement("div");
        const imagenViniloNuevo = document.createElement("img");
        const descripcionViniloNuevo = document.createElement("p");
        const imagenViniloNuevoModal = document.createElement("a");
        const precioViniloNuevo = document.createElement("label");
        const signoViniloNuevo = document.createElement("span");

        viniloNuevo.classList.add("contenido__sección");

        imagenViniloNuevo.classList.add("contenido__sección__imagen");
        imagenViniloNuevo.setAttribute("src", vinilosBD[0]);
        imagenViniloNuevo.setAttribute("alt", vinilosBD[1]);

        imagenViniloNuevoModal.append(imagenViniloNuevo);

        descripcionViniloNuevo.classList.add("contenido__sección__descripción");
        descripcionViniloNuevo.innerText = vinilosBD[2];

        signoViniloNuevo.classList.add("contenido__sección--peso");
        signoViniloNuevo.innerText = "$";

        precioViniloNuevo.appendChild(signoViniloNuevo);
        precioViniloNuevo.innerText = "$ " + vinilosBD[3];

        viniloNuevo.append(imagenViniloNuevoModal);
        viniloNuevo.append(descripcionViniloNuevo);
        viniloNuevo.append(precioViniloNuevo);

        conteniPagPrincipal.appendChild(viniloNuevo);

        //Dinamismo del modal (principal.html)

        const modal = document.getElementById("modal");

        //aca cuando se clickee sobre la imágen el modal se creara para cada uno de los vinilos

        imagenViniloNuevoModal.addEventListener("click", (e) => {
          imagenViniloNuevoModal.setAttribute("href", "#modal");

          const modalIndividual = modal.querySelector("div").querySelector("p");
          const imagenIndividual = document.body
            .querySelector("#modal")
            .querySelector(".modal__contenido")
            .querySelector(".modal__image");
          const imagenIndividualNueva = document.createElement("img");

          //se pasan los datos del JSON al modal de su respectivo vinilo

          for (let i = 0; i < 14; i++) {
            if (
              valor.vinilosModal[i][1] == imagenViniloNuevo.getAttribute("src")
            ) {
              imagenIndividualNueva.setAttribute(
                "src",
                valor.vinilosModal[i][3]
              );
              imagenIndividualNueva.setAttribute(
                "alt",
                valor.vinilosModal[i][2]
              );
              imagenIndividualNueva.classList.add("modal__perfil--imagen");
              modalIndividual.textContent = valor.vinilosModal[i][0];
              imagenIndividual.setAttribute("src", valor.vinilosModal[i][1]);
              imagenIndividual.setAttribute("alt", valor.vinilosModal[i][2]);
              modalIndividual.append(imagenIndividualNueva);
              break;
            }
          }
        });


      }


      //aca se limpia la variable artista porque al ser una variable de tipo string
      //lo que pasa es que se agrega de la siguiente manera
      //artista_1
      //artista_12
      //artista_123
      //se limpia el numero final para evitar un posible error al crear cada vinilo
      artista = "artista_";

    }
  }, 200);
});

//la siguiente función nos permite enviar los datos nuevos al JSON

function enviarDatos(x) {
  fetch("../json/datos.json", {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(x),
  }).then((response) => {
    response.json()
  }).then((dato) => {
    console.log('Se enviaron los datos' + dato);
  }).catch((err) => {
    console.log('Hubo un error al enviar los datos ' + err)
  });
}

//en esta parte agrego el dinamismo al botón de pagar productos

const botonPagar = document.querySelector('.contenido__bottomsheet__objeto--pagar');

botonPagar.addEventListener('click', () => {
  const productosVendidos = document.getElementsByClassName('contenido__bottomsheet__objeto__vinilo');

  for (const elementoProductoVendido of productosVendidos) {
    console.log(elementoProductoVendido.querySelector('p'));
  }

  var banderaJS = 0;
  for (const datosJSON of Array(JSONdatos.compras_realizadas)) {
    //datosJSON.push(["hola"])
    console.log(datosJSON);
    JSON.stringify(JSONdatos);
    enviarDatos(datosJSON);


    banderaJS++;
  }

  //aca elimino los productos una vez se haya obtenido los datos de cada uno

  var vinilos = document.getElementsByClassName('contenido__bottomsheet__objeto__vinilo');
  var totalPrecio = document.getElementById('totalCarrito');

  for (let i in vinilos) {
    for (const viniloEliminado of vinilos) {
      viniloEliminado.remove();
      totalPrecio.innerText = "TOTAL: 0";
    }
  }
});