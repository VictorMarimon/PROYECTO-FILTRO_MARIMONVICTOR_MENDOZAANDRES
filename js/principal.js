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

                const conteniPagPrincipal = document.getElementById('contenido_principal');

                const viniloNuevo = document.createElement('div');
                const imagenViniloNuevo = document.createElement('img');
                const descripcionViniloNuevo = document.createElement('p');
                const imagenViniloNuevoModal = document.createElement('a');
                const precioViniloNuevo = document.createElement('label');
                const signoViniloNuevo = document.createElement('span');

                viniloNuevo.classList.add('contenido__sección');
                
                imagenViniloNuevo.classList.add('contenido__sección__imagen');
                imagenViniloNuevo.setAttribute('src', vinilosBD[artista][0]);
                imagenViniloNuevo.setAttribute('alt', vinilosBD[artista][1]);

                imagenViniloNuevoModal.append(imagenViniloNuevo);

                descripcionViniloNuevo.classList.add('contenido__sección__descripción');
                descripcionViniloNuevo.innerText = vinilosBD[artista][2];

                signoViniloNuevo.classList.add('contenido__sección--peso');
                signoViniloNuevo.innerText = '$';

                precioViniloNuevo.appendChild(signoViniloNuevo);
                precioViniloNuevo.innerText = "$ " +vinilosBD[artista][3];

                viniloNuevo.append(imagenViniloNuevoModal);
                viniloNuevo.append(descripcionViniloNuevo);
                viniloNuevo.append(precioViniloNuevo);

                conteniPagPrincipal.appendChild(viniloNuevo);

                artista = "artista_"

                //Dinamismo del modal (principal.html)

                const vinilo = document.getElementsByClassName('contenido__sección');
                const modal = document.getElementById('modal');


                imagenViniloNuevoModal.addEventListener('click',(e)=>{

                    imagenViniloNuevoModal.setAttribute('href', '#modal');

                    for (const vinilosModalBD of valor.vinilosModal) {
                        const modalIndividual = modal.querySelector('div').querySelector('p');

                        modalIndividual.innerText = vinilosModalBD[artista][0]; 
                        console.log(vinilosModalBD);
                    }
                })
            }
        }
    }, 200);
    

});