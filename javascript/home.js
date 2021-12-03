const JSON = "../json/products.json";
$.getJSON(JSON, function (respuesta, estado) {
  if (estado == "success") {
    let productos = respuesta;
    for(i = 0; i<3; i++){
      const product = document.createElement("div");
      product.className = "home-product";

      product.innerHTML = `
      <img src="${productos[i].image}" alt="Foto de producto">
      <p>${productos[i].producto}</p>
      <button onclick="window.location.href='pages/products.html'">Ver productos</button>
      `;

      $("#products-section").append(product);

      $(".home-product").fadeOut(3, function () {
        $(".home-product").fadeIn(800);
      });
    };
  }
});
