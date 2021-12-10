const JSON = "../json/products.json";
$.getJSON(JSON, function (respuesta, estado) {
  if (estado == "success") {
    let productos = respuesta;
    for (i = 0; i < 4; i++) {
      const product = document.createElement("div");
      product.className = "home-product";

      product.innerHTML = `
      <img src="${productos[i].image}" alt="Foto de producto">
      <p>${productos[i].nombre}</p>
      <button onclick="window.location.href='pages/products.html'" class="btn">Ver productos</button>
      `;

      $("#products-section").append(product);

      $(".home-product").fadeOut(3, function () {
        $(".home-product").fadeIn(800);
      });
    }
  }
});
