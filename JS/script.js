
let nombreProducto1 = "cerveza ipa"
let precioProducto1 = 400
let stockProducto1 = 20

let nombreProducto2 = "cerveza doble ipa"
let precioProducto2 = 450
let stockProducto2 = 20

let nombreProducto3 = "cerveza neipa"
let precioProducto3 = 400
let stockProducto3 = 20

let nombreProducto4 = "cerveza apa"
let precioProducto4 = 350
let stockProducto4 = 20


let cantidadCompras = prompt("ingrese la cantidad de productos distintos que quiere comprar: \n- cerveza ipa\n- cerveza doble ipa\n- cerveza neipa  \n- cerveza apa");
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
    }
}

function sumaIva(precio){
    return precio * 1.21
}

for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("ingrese el nombre del producto que quiere comprar:\n- cerveza ipa\n- cerveza doble ipa\n- cerveza neipa  \n- cerveza apa");
    let cantidad1 = prompt("ingrese la cantidad del producto que quiere comprar:");

    if(compra1 == "cerveza ipa"){
        calculoStock(cantidad1, stockProducto1, precioProducto1)
    }
    else if(compra1 == "cerveza doble ipa"){
        calculoStock(cantidad1, stockProducto2, precioProducto2)
    }
    else if(compra1 == "cerveza neipa"){
        calculoStock(cantidad1, stockProducto3, precioProducto3)
    }
    else if(compra1 == "cerveza apa"){
        calculoStock(cantidad1, stockProducto4, precioProducto4)
    }
    else{
        alert("No tenemos ese producto")
    }
}

switch(true){
    case precioTotal < 1500 || precioTotal > 1000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        break;
    case precioTotal < 3000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case precioTotal < 4000:
        precioTotal = precioTotal * 0.80
        alert("Recibiste un descuento del 20% por tu compra")
        break;
    case precioTotal > 6000:
        alert("Recibiste un descuento del 40% por tu compra")
        precioTotal = precioTotal * 0.60
        break;
    default:
        console.log(precioTotal)
        alert("No ingresaste un precio en numeros");
        break;
}



let precioToTalConImpuestos = sumaIva(precioTotal)

alert("Este es el precio total final con impuestos de tu compra: $" + precioToTalConImpuestos)