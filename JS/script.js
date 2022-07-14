
let nombreProducto1 = "cervezas"
let precioProducto1 = 600
let stockProducto1 = 30

let nombreProducto2 = "fernet"
let precioProducto2 = 800
let stockProducto2 = 20


let cantidadCompras = prompt("ingrese la cantidad de productos distintos que quiere comprar: \n- cervezas\n- fernet");
let precioTotal = 0;

for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("ingrese el nombre del producto que quiere comprar: \n- cervezas\n- fernet");
    let cantidad1 = prompt("ingrese la cantidad del producto que quiere comprar:");

    if(compra1 == "cervezas"){
        if(stockProducto1 >= cantidad1){
            precioTotal += cantidad1 * precioProducto1
            alert("El precio total es de: $" +  (cantidad1 * precioProducto1))
        }
        else{
            alert("no disponemos de esa cantidad en stock. nuestro stock actual es de :" + stockProducto1 + "unidades")
        }  
    }
    else if(compra1 == "fernet"){
        if(stockProducto2 >= cantidad1){
            precioTotal += cantidad1 * precioProducto2
            alert("El precio total es de: $" + (cantidad1 * precioProducto2))
        }
        else{
            alert("no disponemos de esa cantidad en stock. nuestro stock actual es de :" + stockProducto2 + "unidades")
        }  
    }
    else{
        alert("no tenemos ese producto")
    }
}
    if(cantidadCompras > 1){
        alert("este es el precio total de tu compra: " + precioTotal)
    }
