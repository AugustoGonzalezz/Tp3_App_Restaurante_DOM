let resto = document.querySelector(".restaurantes");

fetch("json/restaurantes.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < 9; i++) {
            if (localStorage.getItem("indiceCache") == data[i].truck_id) {

                document.querySelector(".mainResto").innerHTML = `
                <section class="linkResto">
            <div class="picResto">
                <img src="${data[i].avatar.src}" alt="${data[i].avatar.alt}">
            </div>
            <div class="nameResto">
                <div class="vaina">
                    <h2>${data[i].name}</h2>
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