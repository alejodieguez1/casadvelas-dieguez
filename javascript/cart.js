let carrito = JSON.parse(localStorage.getItem("carrito"));
carrito.forEach((producto) => {
  const product = document.createElement("div");
  product.className = "product-container";

  product.innerHTML = `
    <div class="product">
    <img src="${producto.image}" alt="Producto relacionado a velas, decoracion, etc">
    <p>${producto.producto}</p>
    <p>${producto.precio}</p>
    <button id="delete-${producto.id}" class="delete-cart" type="button">Eliminar</button>
    </div>`;

  $("#productsSection").append(product);

  $(".product-container").fadeOut(3, function () {
    $(".product-container").fadeIn(800);
  });
  $(`#delete-${producto.id}`).click(function () {
    carrito.pop(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
  });
});
if (carrito[0] == undefined) {
    const contenedor = document.createElement("div");
    contenedor.className = "empty-container";
    contenedor.innerHTML = `
    <h2>Tu carrito esta vacio</h2>`;
    $("#productsSection").append(contenedor);
};
