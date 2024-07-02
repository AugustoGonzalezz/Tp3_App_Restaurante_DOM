let resto = document.querySelector(".restaurantes");

fetch("json/restaurantes.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < 9; i++) {
            if (localStorage.getItem("indiceCache") == data[i].truck_id) {

                document.querySelector("head").innerHTML = `
                    <link rel="shortcut icon" href="${data[i].avatar.src}" type="image/x-icon"></link>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="css/bodegones.css">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
                    <link rel="stylesheet" href="css/material-icons.css">
                    <title>Reseñas | ${data[i].name}</title>
                `

                document.querySelector(".cerrarMenu").innerHTML = `
                <div class="headerMenu">
                    <h3>${data[i].name} - Reseña</h3>
                    <a href="index.html" class="close iconos">close</a>
                </div>`
                for (let x=0; x < data[i].resenias.length; x++){
                    document.querySelector('.menuResto').innerHTML += /*html*/ `
                    <a href="plato_1.html" class="plato">
                      <div class="img_plato">
                          <img src="${data[i].resenias[x].src}" alt="Imagen_Del_Plato" height="100">
                          <div class="precio_plato">${data[i].resenias[x].calificacion}<i class="iconos">star</i></div>
                      </div>
                      <div class="datos_plato">
                          <h3>${data[i].resenias[x].persona}</h3>
                          <span>${data[i].resenias[x].descripcion}</span>
                      </div>
                  </a>` 
                   
                }

            }
        };
    });