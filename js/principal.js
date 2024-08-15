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

                //Dinamismo del modal (principal.html)

                const vinilo = document.getElementsByClassName('contenido__sección');
                const modal = document.getElementById('modal');


                imagenViniloNuevoModal.addEventListener('click',(e)=>{

                    imagenViniloNuevoModal.setAttribute('href', '#modal');
                    var banderaModal = 0;

                    const modalIndividual = modal.querySelector('div').querySelector('p');
                    console.log(valor.vinilosModal[1].artista_2[1])

                    console.log(imagenViniloNuevo.getAttribute('src'))

                    if(valor.vinilosModal[0].artista_1[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[0].artista_1[0];
                    }else if(valor.vinilosModal[1].artista_2[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                    }else if(valor.vinilosModal[1].artista_3[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                    }else if(valor.vinilosModal[1].artista_4[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                    }else if(valor.vinilosModal[1].artista_5[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                    }else if(valor.vinilosModal[1].artista_6[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                    }else if(valor.vinilosModal[1].artista_7[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                    }else if(valor.vinilosModal[1].artista_8[1] == imagenViniloNuevo.getAttribute('src')){
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                    }else{
                        console.log("x")
                    }

                    


                    //solucionar los gets de los datos del JSON
                    //cuando se intenta traer la url del json trae datos undefined
                    //cuando no se intenta acceder a la url trae un arreglo 
                    //es raro que sea un arreglo y cuando lo itero no me traiga los datos
                    /*
                    for (const vinilosModalBD of valor.vinilosModal) {
                        
                        banderaModal++;
                        var artistaModal = artista + banderaModal;

                        const modalIndividual = modal.querySelector('div').querySelector('p');

                        console.log(vinilosModalBD[artistaModal][1])
                        console.log(valor.vinilos[banderaModal-1].artista_1[0])

                        if(vinilosModalBD[artistaModal][1] == valor.vinilos[banderaModal-1].artista_1[0]){
                            console.log("xtttttt")
                            modalIndividual.textContent = vinilosModalBD[artistaModal][0];
                            break
                        }else if(vinilosModalBD[artistaModal][1] == valor.vinilos[banderaModal-1].artista_2[0]){
                            modalIndividual.textContent = vinilosModalBD[artistaModal][0];
                        }else{
                            console.log(vinilosModalBD[artistaModal][1])
                            console.log(valor.vinilos[banderaModal])
                            console.log("b")
                            break
                        }
                    }*/
                })
                artista = "artista_"
            }
        }
    }, 200);
    

});