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
                    <title>Menu | ${data[i].name}</title>
                `

                document.querySelector(".cerrarMenu").innerHTML = `
                <div class="headerMenu">
                    <h3>${data[i].name} - Menu</h3>
                    <a href="index.html" class="close iconos">close</a>
                </div>`
                for (let x=0; x < data[i].platos.length; x++){
                    document.querySelector('.menuResto').innerHTML += /*html*/ `
                    <a href="plato_1.html" class="plato">
                      <div class="img_plato">
                          <img src="${data[i].platos[x].src}" alt="Imagen_Del_Plato" height="100">
                          <div class="precio_plato">$${data[i].platos[x].precio}</div>
                      </div>
                      <div class="datos_plato">
                          <h3>${data[i].platos[x].titulo}</h3>
                          <span>${data[i].platos[x].descripcion}</span>
                      </div>
                  </a>` 
                   
                }

            }
        };
    });