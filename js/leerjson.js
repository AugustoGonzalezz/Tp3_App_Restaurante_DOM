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
  console.log(data[1].name)
  console.log(data[1].platos[0].titulo)
  
   
    for (let i=0; i < 18; i++){
        document.querySelector('.restaurantes').innerHTML += /*HTML*/  `
        <a class="resto" href="resto.html">
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
                            <i class="iconos f16">${data[i].puntuacion}</i>
                            (89)
                        </div>
                        <div class="precio verde_txt">
                            <i class="iconos">attach_money</i>
                            <i class="iconos">attach_money</i>
                            <i class="iconos gris_txt">attach_money</i>
                        </div>
                    </div>
                </div>
                <div class="puntuacion">${data[i].puntuacion}</div>
        </a>`   
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