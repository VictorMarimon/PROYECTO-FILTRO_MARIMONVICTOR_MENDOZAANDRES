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

                //cuando se carga el html de la página se crean los vinilos del sitio web uno por uno

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

                const modal = document.getElementById('modal');

                //aca cuando se clickee sobre la imágen el modal se creara para cada uno de los vinilos

                imagenViniloNuevoModal.addEventListener('click',(e)=>{

                    imagenViniloNuevoModal.setAttribute('href', '#modal');

                    const modalIndividual = modal.querySelector('div').querySelector('p');
                    const imagenIndividual = document.body.querySelector('#modal').querySelector('.modal__contenido').querySelector('.modal__image');
                    const imagenIndividualNueva = document.createElement('img');

                    //se pasan los datos del JSON al modal de su respectivo vinilo

                    if(valor.vinilosModal[0].artista_1[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[0].artista_1[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[0].artista_1[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else if(valor.vinilosModal[1].artista_2[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[1].artista_2[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[1].artista_2[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[1].artista_2[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else if(valor.vinilosModal[2].artista_3[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[2].artista_3[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[2].artista_3[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[2].artista_3[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else if(valor.vinilosModal[3].artista_4[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[3].artista_4[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[3].artista_4[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[3].artista_4[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else if(valor.vinilosModal[4].artista_5[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[4].artista_5[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[4].artista_5[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[4].artista_5[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else if(valor.vinilosModal[5].artista_6[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[5].artista_6[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[5].artista_6[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[5].artista_6[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else if(valor.vinilosModal[6].artista_7[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[6].artista_7[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[6].artista_7[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[6].artista_7[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else if(valor.vinilosModal[7].artista_8[1] == imagenViniloNuevo.getAttribute('src')){
                        imagenIndividualNueva.setAttribute('src', valor.vinilosModal[0].artista_1[3]);
                        imagenIndividualNueva.setAttribute('alt', valor.vinilosModal[0].artista_1[2]);
                        imagenIndividualNueva.classList.add('modal__perfil--imagen');
                        modalIndividual.textContent = valor.vinilosModal[7].artista_8[0];
                        imagenIndividual.setAttribute('src', valor.vinilosModal[7].artista_8[1]);
                        imagenIndividual.setAttribute('alt', valor.vinilosModal[7].artista_8[2]);
                        modalIndividual.append(imagenIndividualNueva);
                    }else{
                        console.log("x")
                    }
                })
                //aca se limpia la variable artista porque al ser una variable de tipo string 
                //lo que pasa es que se agrega de la siguiente manera
                //artista_1
                //artista_12
                //artista_123
                //se limpia el numero final para evitar un posible error al crear cada vinilo

                artista = "artista_"
            }
        }
    }, 200);
    

});