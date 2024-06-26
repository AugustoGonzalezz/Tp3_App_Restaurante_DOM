//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('json/restaurantes.json')
//espero respuesta
.then(response => {
    //almacena los datos obtenidos convertidos a json
    return response.json()
    })
    // cuando devuelve la conversión a un array de objetos podemos comenzar a utilizarlos.
    // utilizamos una variable, en ésta oportunidad ocupamos el nombre DATA
    // alt + 96 comilla invertida ``
.then(data => {
 
    for (let i=0; i < 18; i++){

      let tarjeta = document.createElement("a")
      tarjeta.classList.add("resto")
      
        document.querySelector('.restaurantes').innerHTML += /*HTML*/  `
        <a class="resto" href="">
                <div class="imagen_resto">
                    <img src="${data[i].avatar.src}" alt="${data[i].avatar.alt}" height="100%" width="100%"  style="object-fit: cover;">
                </div>

                <div class="desc_resto">
                    <h3>${data[i].name}</h3>
                    <h5 class="gris_txt">
                        <p>${data[i].direccion}</p>
                        <p>${data[i].horario}</p>
                    </h5>
                    <div class="precio_val">
                        <div class="valoracion verde_txt">
                        ${`<i class="iconos f16">star</i>`.repeat(data[i].estrellas)}
                        ${`<i class="iconos f16 gris_txt">star</i>`.repeat(5 - data[i].estrellas)}
                            (89)
                        </div>
                        <div class="precio verde_txt">
                        ${`<i class="iconos">attach_money</i>`.repeat(data[i].rango)}
                        ${`<i class="iconos gris_txt">attach_money</i>`.repeat(3 - data[i].rango)}
                        </div>
                    </div>
                </div>
                <div class="puntuacion">${data[i].puntuacion}</div>
                
        </a>`   

        let ojo = document.querySelectorAll(".resto")

        ojo[i].addEventListener("click", function () {
            let idtarjeta = data[i].truck_id
                         //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
            localStorage.setItem("indiceCache", idtarjeta);
            console.log(idRestauranteSeleccionado)
        });
         
    
    }


    
})


// .then(plato => {
//     console.log(plato[1].name)
//       for (let i=0; i < 2; i++){
//           document.querySelector('.menuResto').innerHTML += /*html*/ `
//           <a href="plato_1.html" class="plato">
//             <div class="img_plato">
//                 <img src="${plato[i].platos.src}" alt="Imagen_Del_Plato" height="100">
//                 <div class="precio_plato">${plato[i].platos.precio}</div>
//             </div>
//             <div class="datos_plato">
//                 <h3>${plato[i].name}</h3>
//                 <span>Vegetales de la huerta re caros.</span>
//             </div>
//         </a>` 
         
//       }
//   })