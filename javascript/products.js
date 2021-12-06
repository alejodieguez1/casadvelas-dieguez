const JSON = "../json/products.json";
let carrito = [];
$.getJSON(JSON, function (respuesta, estado) {
  if (estado == "success") {
    let productos = respuesta;
    productos.forEach((producto) => {
      const product = document.createElement("div");
      product.className = "product-container";

      product.innerHTML = `
        <div class="product">
        <img src="${producto.image}" alt="Producto relacionado a velas, decoracion, etc">
        <p>${producto.producto}</p>
        <p>${producto.precio}</p>
        <button id="cart-${producto.id}" class="btn-cart" type="button">Agregar a carrito</button>
        <button id="delete-${producto.id}" class="delete-cart" type="button">Eliminar</button>
        </div>`;

      $("#productsSection").append(product);

      $(".product-container").fadeOut(3, function () {
        $(".product-container").fadeIn(800);
      });
      $(`#cart-${producto.id}`).click(function() {
        carrito.push(producto);
        console.log(carrito);
      })
      $(`#delete-${producto.id}`).click(function() {
        carrito.pop(producto);
        console.log(carrito);
      })
    });
  };
});
