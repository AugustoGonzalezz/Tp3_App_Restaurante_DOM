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
                <img src="/img/mishi.jpg" alt="">
            </div>
            <div class="nameResto">
                <div class="vaina">
                    <h2>${data[i].name}</h2>
                    <h5 class="gris_txt">San Rafael, Mendoza</h5>
                </div>
                <div class="precio verde_txt">
                    <i class="iconos">attach_money</i>
                    <i class="iconos">attach_money</i>
                    <i class="iconos">attach_money</i>
                </div>
            </div>
            <div class="puntuResto">4.7</div>
        </section>

        <section class="descResto">
            <ul class="datos">
                <li class="btn-cat">
                    <i class="iconos f30">place</i>
                    1.5km
                </li>
                <li class="btn-cat">
                    <i class="iconos f30">timer</i>
                    12-00Hs
                </li>
                <li class="btn-cat">
                    <i class="iconos f30">delivery_dining</i>
                    Delivery
                </li>
            </ul>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt perferendis illum nobis exercitationem sequi, omnis quis maiores asperiores magni sapiente quod, consequatur, eum nostrum voluptate aliquam qui a vitae esse?</p>
        </section>`


            }
        };
    });