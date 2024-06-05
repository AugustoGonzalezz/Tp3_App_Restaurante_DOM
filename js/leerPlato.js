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
    console.log(data[i].name)
    console.log(data[1].platos[0].titulo)
      for (let x=0; x < 2; x++){
          document.querySelector('.menuResto').innerHTML += /*html*/ `
          <a href="plato_1.html" class="plato">
            <div class="img_plato">
                <img src="${data[1].platos[x].src}" alt="Imagen_Del_Plato" height="100">
                <div class="precio_plato">${data[1].platos[x].precio}</div>
            </div>
            <div class="datos_plato">
                <h3>${data[1].platos[x].titulo}</h3>
                <span>${data[1].platos[x].descripcion}</span>
            </div>
        </a>` 
         
      }
  })