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
                    <title>Tabla | ${data[i].name}</title>
                `

                document.querySelector(".mainResto").innerHTML = `
                <section class="linkResto">
                    <div class="picResto">
                        <img src="${data[i].cover_photo.src}" alt="${data[i].cover_photo.alt}">
                    </div>
                    <div class="nameResto">
                        <div class="vaina">
                            <h2>Restaurante ${data[i].name}</h2>
                            <h5 class="gris_txt">${data[i].direccion}</h5>
                        </div>
                        <div class="precio verde_txt">
                        ${`<i class="iconos">attach_money</i>`.repeat(data[i].rango)}
                        ${`<i class="iconos gris_txt">attach_money</i>`.repeat(3 - data[i].rango)}
                        </div>
                    </div>
                    <div class="puntuResto">${data[i].puntuacion}</div>
                </section>

                <section class="descResto">
                    <ul class="datos">
                        <li class="btn-cat">
                            <i class="iconos f30">place</i>
                            1.5km
                        </li>
                        <li class="btn-cat">
                            <i class="iconos f30">timer</i>
                            ${data[i].horario}
                        </li>
                        <li class="btn-cat">
                            <i class="iconos f30">delivery_dining</i>
                            ${data[i].delivery}
                        </li>
                    </ul>
                    <p>${data[i].bio}</p>
                </section>`


            }
        };
    });