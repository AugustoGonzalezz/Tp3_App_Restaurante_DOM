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
                    <title>Plato | ${data[i].name}</title>
                `

                document.querySelector(".mainResto").innerHTML = `
                <section class="linkResto">
                <div class="picResto">
                    <img src="img/plato2.jpg" alt="" width="100%">
                </div>
                <div class="nameResto">
                    <div class="vaina">
                        <h2>Ravioles</h2>
                        <h5 class="gris_txt">Ravioles rellenos con tinta de pulpo y sanguche de milanga</h5>
                    </div>
                    
                </div>
                <div class="puntuResto">
    
                </div>
            </section>
            <br><br>
            <section class="descResto">
                <p class="p10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt perferendis illum nobis exercitationem sequi, omnis quis maiores asperiores magni sapiente quod, consequatur, eum nostrum voluptate aliquam qui a vitae esse?</p>
            </section>
    
            <nav class="agregarCarrito">
                <div class="flex">
                    <div class="flex">
    
                        <button id="restar" class="iconos botonCarrito"  onclick="restar()">remove</button>            
                        <p class="botonCarrito" id="cantidad">1</p>
                        <button id="sumar" class="iconos botonCarrito"  onclick="sumar()">add</button>
            
                    </div>
                    <button class="btnAgregar"> <i class="iconos">post_add</i>Agregar al pedido</button>
                </div>
                <span id="subtotal" >Cantidad de dinero a pagar</span>
            </nav>`

            }
        };
    });