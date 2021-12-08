const key = "../json/products.json";
let carrito = [];
$.getJSON(key, function (respuesta, estado) {
  if (estado == "success") {
    let productos = respuesta;
    productos.forEach((producto) => {
      const product = document.createElement("div");
      product.className = "product-container";

      product.innerHTML = `
        <div class="product">
        <img src="${producto.image}" alt="Producto relacionado a velas, decoracion, etc">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <button id="cart-${producto.id}" class="btn-cart" type="button">Agregar a carrito</button>
        </div>`;

      $("#productsSection").append(product);

      $(".product-container").fadeOut(3, function () {
        $(".product-container").fadeIn(800);
      });
      $(`#cart-${producto.id}`).click(function () {
        if(producto.cantidad == 0) {
          carrito.push(producto);
          producto.cantidad = producto.cantidad+1;
        }else {
          producto.cantidad = producto.cantidad+1;
          producto.precio = producto.precio + producto.precio;
        };
        localStorage.setItem("carrito", JSON.stringify(carrito));
        swal("Agregaste", `"${producto.nombre}" a tu carrito de compras`, "success", {
          timer: 900,
          buttons: false,
        });
      });
    });
  }
});
