// let es global y local
// var es global

let cantidad = document.getElementById("cantidad");
let btnrestar = document.getElementById("restar");
let btnsumar = document.getElementById("sumar");
let subTotal = document.getElementById("subtotal");

let precioUnit = document.querySelector(".puntuResto");
let unit = 1890;
precioUnit.innerText = `$  ${unit}`;


let cant = 1;
btnrestar.innerText = "block";
btnrestar.style.color = "gray";
btnrestar.style.cursor = "unset";

function restar(){
  if(cant>1){
    btnrestar.innerText = 'remove';
    btnsumar.innerText = 'add';
    cant = cant - 1;
    cantidad.innerText=cant;
    console.log(cant);

    subTotal.innerText = `Total: $  ${unit*cant}`;
    
  }
  if(cant===1){
    btnrestar.innerText = "block";
    btnrestar.style.color = "gray";
    btnrestar.style.cursor = "unset";
    // alert("No puedes sumar mas de 15");
  }
}

function sumar(){
  if(cant<=14){
    btnrestar.innerText = 'remove';
    btnsumar.innerText = 'add';
    cant = cant + 1;
    cantidad.innerText=cant;
    console.log(cant);
    btnrestar.style.cursor = "unset";
    subTotal.innerText = `Total: $  ${unit*cant}`;
    
  }
  if(cant===15){
    btnsumar.innerText = "block";
    btnsumar.style.color = "gray";
    // alert("No puedes sumar mas de 15");
  }
}

let carrito = document.querySelector(".btnAgregar");

carrito.addEventListener("click", function () {
  console.log("BOTON CARRITO AGREGADO")
});