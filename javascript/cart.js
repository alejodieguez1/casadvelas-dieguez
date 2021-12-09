let carrito = JSON.parse(localStorage.getItem("carrito"));
carrito.forEach((producto) => {
  const product = document.createElement("div");
  product.className = "product-container";

  product.innerHTML = `
    <div class="product">
    <img src="${producto.image}" alt="Producto relacionado a velas, decoracion, etc">
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    <p>Cantidad:${producto.cantidad}</p>
    </div>`;

  $("#productsSection").append(product);

  $(".product-container").fadeOut(3, function () {
    $(".product-container").fadeIn(800);
  });
});
if (carrito == 0) {
  const contenedor = document.createElement("div");
  contenedor.className = "empty-container";
  contenedor.innerHTML = `
    <div class="card">
    <div class="sad-face">:(</div>
    <p>Tu carrito esta vacio</p>
    <button onclick="window.location.href='products.html'" class="btn-empty">Agrega productos</button>
    </div>
    `;
  $("#productsSection").append(contenedor);
  $("#productsSection").css({
    "grid-template-columns": "1fr 0fr",
    "display": "flex",
    "justify-content": "center",
  });
}
if (carrito.length == 1) {
  $("#productsSection").css({
    "grid-template-columns": "1fr",
  });
}