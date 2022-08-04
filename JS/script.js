
function producto(nombre, precio, stock){
  this.nombre = nombre
  this.precio = precio
  this.stock = stock
}

const producto1 = new producto("cerveza ipa", 400, 20)
const producto2 = new producto("cerveza doble ipa", 450, 20)
const producto3 = new producto("cerveza neipa", 400, 20)
const producto4 = new producto("cerveza apa", 350, 20)
const producto5 = new producto("cerveza white ipa", 350, 20)
const producto6 = new producto("cerveza black lager", 450, 20)

let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6]
let nombresProductos = listaProductos.map((producto) => producto.nombre)
let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar:\n " + nombresProductos.join("\n "))
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("El precio total es de: $" + (cantidad * producto.precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
    }
}
for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar:\n " + nombresProductos.join("\n ")).toLowerCase()
    let cantidad1 = prompt("ingrese la cantidad del producto que quiere comprar:");

    if(compra1 == producto1.nombre.toLowerCase()){
        calculoStock(cantidad1, producto1)
    }
    else if(compra1 == producto2.nombre.toLowerCase()){
        calculoStock(cantidad1, producto2)
    }
    else if(compra1 == producto3.nombre.toLowerCase()){
        calculoStock(cantidad1, producto3)
    }
    else if(compra1 == producto4.nombre.toLowerCase()){
        calculoStock(cantidad1, producto4)
    }
    else if(compra1 == producto5.nombre.toLowerCase()){
        calculoStock(cantidad1, producto5)
    }
    else if(compra1 == producto6.nombre.toLowerCase()){
        calculoStock(cantidad1, producto6)
    }
    else{
        alert("No tenemos ese producto")
    }
}

switch(true){
    case precioTotal < 3000 && precioTotal > 1000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        break;
    case precioTotal >= 3000 && precioTotal <6000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case precioTotal >= 6000:
        alert("Recibiste un descuento del 30% por tu compra")
        precioTotal = precioTotal * 0.70
        break;
    default:
        console.log(precioTotal)
        alert("No ingresaste un precio en numeros");
        break;
}

alert("Este es el precio total final de tu compra es: $" + precioTotal)
