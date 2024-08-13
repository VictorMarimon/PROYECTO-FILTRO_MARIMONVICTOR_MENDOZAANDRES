//BASE DE DATOS

let JSON;

fetch('../json/datos.json').then((res)=>{
    if(!res.ok){
        console.error("Error al cargar el archivo JSON")
        console.log(res);
    }
    return res.json()
}).then((datos)=>{
    JSON = datos;
}).catch((res)=>{
    console.error("Hubo un error en el JSON " + res)
})

setTimeout(()=>{
    console.log(JSON)
}, 200);


//
document.addEventListener('DOMContentLoaded', (e)=>{
    
    

});


//prueba

const pruebaBoton = document.querySelector('.contenido__sección__imagen');

const shakira = document.getElementById('shakira');

shakira.addEventListener('click', ()=>{
    console.log("hola")
})

console.log(pruebaBoton)

pruebaBoton.addEventListener('click', (e)=>{
    //prueba

    const conteniPagPrincipal = document.getElementById('contenido_principal');

    const viniloNuevo = document.createElement('div');
    const imagenViniloNuevo = document.createElement('img');
    const descripcionViniloNuevo = document.createElement('p');
    const precioViniloNuevo = document.createElement('label');
    const signoViniloNuevo = document.createElement('span');

    viniloNuevo.classList.add('contenido__sección');
    
    imagenViniloNuevo.classList.add('contenido__sección__imagen');
    imagenViniloNuevo.setAttribute('src', "hola");
    imagenViniloNuevo.setAttribute('alt', "hola");

    descripcionViniloNuevo.classList.add('contenido__sección__descripción');
    descripcionViniloNuevo.innerText = "hola";

    signoViniloNuevo.classList.add('contenido__sección--peso');
    signoViniloNuevo.innerText = '$';

    precioViniloNuevo.append(signoViniloNuevo);
    precioViniloNuevo.innerText = "20.000"

    viniloNuevo.append(imagenViniloNuevo);
    viniloNuevo.append(descripcionViniloNuevo);
    viniloNuevo.append(precioViniloNuevo);

    conteniPagPrincipal.appendChild(viniloNuevo);
})



//Dinamismo del modal (principal.html)

const vinilo = document.getElementsByClassName('contenido__sección');
const imagenVinilo = document.getElementsByClassName('contenido__sección__imagen');


for (const valor of imagenVinilo) {
    valor.addEventListener('click', ()=>{
        
    });
}