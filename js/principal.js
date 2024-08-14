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

//se agregan los vinilos una vez cargue el documento HTML
document.addEventListener('DOMContentLoaded', (e)=>{
    var bandera = 0;
    var artista = "artista_";
    setTimeout(()=>{
        for (const valor of Array(JSON)) {
            for (const vinilosBD of valor.vinilos) {
                bandera++;
                artista = artista + bandera;

                console.log(vinilosBD[artista][0])
                console.log(vinilosBD[artista][1])
                console.log(vinilosBD[artista][2])
                console.log(vinilosBD[artista][3])

                const conteniPagPrincipal = document.getElementById('contenido_principal');

                const viniloNuevo = document.createElement('div');
                const imagenViniloNuevo = document.createElement('img');
                const descripcionViniloNuevo = document.createElement('p');
                const precioViniloNuevo = document.createElement('label');
                const signoViniloNuevo = document.createElement('span');

                viniloNuevo.classList.add('contenido__sección');
                
                imagenViniloNuevo.classList.add('contenido__sección__imagen');
                imagenViniloNuevo.setAttribute('src', vinilosBD[artista][0]);
                imagenViniloNuevo.setAttribute('alt', vinilosBD[artista][1]);

                descripcionViniloNuevo.classList.add('contenido__sección__descripción');
                descripcionViniloNuevo.innerText = vinilosBD[artista][2];

                signoViniloNuevo.classList.add('contenido__sección--peso');
                signoViniloNuevo.innerText = '$';

                precioViniloNuevo.appendChild(signoViniloNuevo);
                precioViniloNuevo.innerText = vinilosBD[artista][3];

                viniloNuevo.append(imagenViniloNuevo);
                viniloNuevo.append(descripcionViniloNuevo);
                viniloNuevo.append(precioViniloNuevo);

                conteniPagPrincipal.appendChild(viniloNuevo);

                artista = "artista_"
            }
        }
    }, 200);
    

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