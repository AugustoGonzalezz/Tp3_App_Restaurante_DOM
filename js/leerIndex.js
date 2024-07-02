let resto = document.querySelector(".restaurantes");

fetch("json/restaurantes.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < 9; i++) {
            
            // almaceno en la variable restaurante el valor de i del FOR
            let restaurante = data[i];

            let cartaRestaurante = document.createElement("a");
            cartaRestaurante.classList.add("resto");
            cartaRestaurante.setAttribute("href", "resto.html")
            //ESTO EN IMAGEN RESTO height="100%" width="100%"  style="object-fit: cover;"
            // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
            cartaRestaurante.id = restaurante.truck_id;
            cartaRestaurante.innerHTML = /*html*/ `
                    
                <div class="imagen_resto">
                    <img src="${data[i].avatar.src}" alt="${data[i].avatar.alt}" >
                    
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
                            (${data[i].comentarios})
                        </div>
                        <div class="precio verde_txt">
                        ${`<i class="iconos">attach_money</i>`.repeat(data[i].rango)}
                        ${`<i class="iconos gris_txt">attach_money</i>`.repeat(3 - data[i].rango)}
                        </div>
                    </div>
                </div>
                <div class="puntuacion">${data[i].puntuacion}</div>
                
        `   ;

            cartaRestaurante.addEventListener("click", function () {
                let idRestauranteSeleccionado = restaurante.truck_id;
                //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
                localStorage.setItem("indiceCache", idRestauranteSeleccionado);
                console.log(idRestauranteSeleccionado);
            });

            resto.appendChild(cartaRestaurante);
        }
    });

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");
