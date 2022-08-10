
// function producto(nombre, precio, stock){
//   this.nombre = nombre
//   this.precio = precio
//   this.stock = stock
// }

// const producto1 = new producto("cerveza ipa", 400, 20)
// const producto2 = new producto("cerveza doble ipa", 450, 20)
// const producto3 = new producto("cerveza neipa", 400, 20)
// const producto4 = new producto("cerveza apa", 350, 20)
// const producto5 = new producto("cerveza white ipa", 350, 20)
// const producto6 = new producto("cerveza black lager", 450, 20)

// let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6]
// let nombresProductos = listaProductos.map((producto) => producto.nombre)
// let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar:\n " + nombresProductos.join("\n "))
// let precioTotal = 0;

// function calculoPrecio(cantidad, precio){
//     precioTotal += cantidad * precio
// }

// function calculoStock(cantidad, producto){
//     if(producto.stock >= cantidad){
//         calculoPrecio(cantidad, producto.precio)
//         alert("El precio total es de: $" + (cantidad * producto.precio))
//     }
//     else{
//         alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
//     }
// }
// for(let i = 0; i < cantidadCompras; i++){

//     let compra1 = prompt("Ingrese el nombre del producto que quiere comprar:\n " + nombresProductos.join("\n ")).toLowerCase()
//     let cantidad1 = prompt("ingrese la cantidad del producto que quiere comprar:");

//     if(compra1 == producto1.nombre.toLowerCase()){
//         calculoStock(cantidad1, producto1)
//     }
//     else if(compra1 == producto2.nombre.toLowerCase()){
//         calculoStock(cantidad1, producto2)
//     }
//     else if(compra1 == producto3.nombre.toLowerCase()){
//         calculoStock(cantidad1, producto3)
//     }
//     else if(compra1 == producto4.nombre.toLowerCase()){
//         calculoStock(cantidad1, producto4)
//     }
//     else if(compra1 == producto5.nombre.toLowerCase()){
//         calculoStock(cantidad1, producto5)
//     }
//     else if(compra1 == producto6.nombre.toLowerCase()){
//         calculoStock(cantidad1, producto6)
//     }
//     else{
//         alert("No tenemos ese producto")
//     }
// }

// switch(true){
//     case precioTotal < 3000 && precioTotal > 1000:
//         precioTotal = precioTotal * 0.95
//         alert("Recibiste un descuento del 5% por tu compra")
//         break;
//     case precioTotal >= 3000 && precioTotal <6000:
//         precioTotal = precioTotal * 0.90
//         alert("Recibiste un descuento del 10% por tu compra")
//         break;
//     case precioTotal >= 6000:
//         alert("Recibiste un descuento del 30% por tu compra")
//         precioTotal = precioTotal * 0.70
//         break;
//     default:
//         console.log(precioTotal)
//         alert("No ingresaste un precio en numeros");
//         break;
// }

// alert("Este es el precio total final de tu compra es: $" + precioTotal)

document.addEventListener('DOMContentLoaded', () => {

    let carrito = [];
    const DOMitems = document.getElementById('items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    const listaDeProductos = [
        {
            id: 1,
            nombre: "cerveza ",
            precio: 300,
            // stock: 20,
            img:'multimedia/fotos/foto1.jpg'
        },
        {
            id: 2,
            nombre: "cerveza ",
            precio: 300,
            // stock: 20,
            img:'multimedia/fotos/foto2.jpg'
        },
        {
            id: 3,
            nombre: "cerveza ",
            precio: 300,
            // stock: 20,
            img:'multimedia/fotos/foto3.jpg'
        },
        {
            id: 4,
            nombre: "cerveza ",
            precio: 300,
            // stock: 20,
            img:'multimedia/fotos/foto4.jpg'
        }
    ]
function renderizarProductos() {
    listaDeProductos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.innerText = info.nombre;
          // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('imagen');
        miNodoImagen.setAttribute('src', info.img);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.innerText = `$${info.precio}`;
        //Stock
        // const miNodoStock = document.createElement('p');
        // miNodoStock.classList.add('card-text');
        // miNodoStock.innerText = `Stock: ${info.stock}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.innerText = 'agregar al carrito';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.append(miNodoImagen);
        miNodoCardBody.append(miNodoTitle);
        miNodoCardBody.append(miNodoPrecio);
        // miNodoCardBody.append(miNodoStock);
        miNodoCardBody.append(miNodoBoton);
        miNodo.append(miNodoCardBody);
        DOMitems.append(miNodo);
    });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(e) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(e.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.innerText = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = listaDeProductos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.innerText = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.innerText = calcularTotal();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(e) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = e.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = listaDeProductos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.removeItem('carrito');

}

function guardarCarritoEnLocalStorage () {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (localStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();
});