let productos = [
  { id: 23, producto: "Vela", precio: "$" + 56, stock: 10 },
  { id: 24, producto: "Cera", precio: "$" + 150, stock: 25 },
  { id: 6, producto: "Jarron", precio: "$" + 65, stock: 5 },
  { id: 89, producto: "Vela redonda", precio: "$" + 86, stock: 7 },
  { id: 76, producto: "Vela alta", precio: "$" + 45, stock: 11 },
  { id: 90, producto: "Vela grande", precio: "$" + 120, stock: 3 },
  { id: 2, producto: "Combo Velas X2", precio: "$" + 250, stock: 2 },
];


let carrito = [];

productos.forEach((producto) => {
  const product = document.createElement("div");
  product.className = "product-container";
  
  product.innerHTML = `
  <div class="product">
  <img src="../assets/300x300.png" alt="Producto relacionado a velas, decoracion, etc">
  <p>${producto.producto}</p>
  <p>${producto.precio}</p>
  <button id="cart-${producto.id}" class="btn-cart" type="button">Agregar a carrito</button>
  </div>`;
  
  $("#productsSection").append(product);
  
  $(".product-container").fadeOut(3, function () {
    $(".product-container").fadeIn(800);
  });
  
  $(`#cart-${producto.id}`).click(function () {
    carrito.push(producto);
    producto.stock = producto.stock - 1;
    const product = document.createElement("div");
    product.className = "product-container";
    
    product.innerHTML = `
    <div class="product">
    <img src="../assets/300x300.png" alt="Producto relacionado a velas, decoracion, etc">
    <h5>${producto.producto}</h5>
    <p>${producto.precio}</p>
    </div>
    </div>`;
    $("#cart-section").append(product);
  });
});
 const GETURL = "../json/products.json";
 $(".btn-cart").click(() => {
   $.getJSON(GETURL, function(respuesta, estado) {
     if(estado == "success") {
       let misDatos = respuesta;
       console.log(misDatos[0].producto);
     }
   })
 })
