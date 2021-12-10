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
    <button id="${producto.id}" class="btn" type="button">Quitar del carrito</button>
    </div>`;

  $("#productsSection").append(product);

  $(".product-container").fadeOut(3, function () {
    $(".product-container").fadeIn(800);
  });
  $(`#${producto.id}`).click(function () {
    if (producto.cantidad == 1) {
      carrito.pop(producto);
    } else {
      producto.cantidad = producto.cantidad - 1;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
  });
});
if (carrito == 0) {
  const contenedor = document.createElement("div");
  contenedor.className = "empty-container";
  contenedor.innerHTML = `
    <div class="card">
    <div class="sad-face">:(</div>
    <p>Tu carrito esta vacio</p>
    <button onclick="window.location.href='products.html'" class="btn">Agrega productos</button>
    </div>
    `;
  $("#productsSection").append(contenedor);
  $("#productsSection").css({
    "grid-template-columns": "1fr 0fr",
    display: "flex",
    "justify-content": "center",
  });
  $("#aside-section").css({
    display: "none",
  });
  $("#cartBody-container").css({
    "grid-template-rows": "106px auto 100px",
  });
}
if (carrito.length == 1) {
  $("#productsSection").css({
    "grid-template-columns": "1fr",
  });
}
$("#finishBtn").click(function () {
  swal("Gracias por tu compra", "Esperamos que vuelvas pronto", "success", {
    timer: 900,
    buttons: false,
  });
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
});
$("#empty-cart").click(function () {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
});
calcTotal = function (cart, prop) {
  return cart.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
};
precioTotal = calcTotal(carrito, "precio");
precioString = precioTotal.toString();
const totalContainer = document.createElement("div");
totalContainer.className = "finalCount";
totalContainer.innerHTML = `
<p>El total de tu seria: $${precioTotal}</p>`;
$(".price-container").append(totalContainer);
