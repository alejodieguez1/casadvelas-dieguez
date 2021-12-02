const JSON = "../json/products.json";
$.getJSON(JSON, function (respuesta, estado) {
  if (estado == "success") {
    let productos = respuesta;
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
    });
  }
});
