// console.log("Mostrar comida");
// let comida = document.getElementById("comida");
// console.log(comida);
// console.log("Mostrar comida solo texto");
// console.log(comida.innerText);
// console.log("Mostrar comida HTML Completo");
// console.log(comida.innerHTML);

// ########################################

// console.log("Titulo");
// let titulo = document.querySelector("body");
// // Busca una etiqueta, clase o id queryselector
// console.log(titulo);

// ########################################

// console.log("Titulo");
// let titulo2 = document.querySelector("#comida");
// console.log(titulo);

// ########################################

// console.log("Iconos");
// let iconos = document.querySelector(".iconos");
// console.log(iconos);

// ########################################

// let lista = document.querySelector("li");
// console.log(lista)
// let listas = document.querySelectorAll("li");
// console.log(listas[2].innerText)

// let claselistas = document.getElementsByClassName("iconos");
// console.log(claselistas[0].innerHTML);

// la diferencia entre todos los byelements es que los demas devuelven arreglos y byelementid es unico

// const listaElementos = document.querySelectorAll("ul > li, ul > h2");

// console.log(listaElementos);

// listaElementos.forEach((elemento) => {
//   console.log(elemento);
// });

// let listaElementos = document.querySelectorAll("ul > li");

// console.log(listaElementos);

// listaElementos.forEach((elemento) => {
//   console.log(elemento);
// });

// listaElementos[2].innerText("t");

let listaElementos = document.querySelectorAll("ul > li");

console.log(listaElementos);

listaElementos.forEach((elemento) => {
  console.log(elemento);
});

let listaDesordenada = document.createElement("ul");
document.body.appendChild(listaDesordenada);

// Creamos el elemento LI mediante el metodo createElement
let listaElemento1 = document.createElement("li");
// Le asignamos un texto al LI creado mediante textContent
listaElemento1.textContent = "Es gratis";
// Agrego el elemento dentro del nodo listaDesordenada
listaDesordenada.appendChild(listaElemento1);

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Es impresionante";
listaDesordenada.appendChild(listaElemento2);

function borrar(){listaDesordenada.removeChild(listaElemento2);}

function borrarElemento(elemento){listaDesordenada.removeChild(elemento);}

// COMENZAMOS ARCHIVO 03_DOM...ipynb

let cambioh1 = document.querySelector("h1");
cambioh1.style.color = "White";
cambioh1.style.backgroundColor = "Aquamarine";
cambioh1.style.fontSize = "50px";

cambioh1.classList.add("iconos");
// El Toggle agrega o retira la clase
// El toggle le saca o le agrega la clase si el elemento en la estructura de html tiene <h1 class="iconos" utilizando classList.toggle se lo va a remover y si la estructura inicial es <h1>pipi</h1>, classList.toggle agregara la clase ICONOS
cambioh1.classList.toggle("iconos");