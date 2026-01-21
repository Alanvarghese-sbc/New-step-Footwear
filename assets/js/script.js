// Render products (home & products page)
function renderProducts(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = limit ? products.slice(0, limit) : products;

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="assets/images/products/${p.id}/1.jpg" loading="lazy">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a href="product.html?id=${p.id}" class="btn">View Details</a>
      </div>
    `;
  });
}

renderProducts("featuredProducts", 2);
renderProducts("productList");

// Product details page
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (productId) {
  const product = products.find(p => p.id === productId);

  document.getElementById("productName").innerText = product.name;
  document.getElementById("productBrand").innerText = product.brand;
  document.getElementById("productDescription").innerText = product.description;
  document.getElementById("productPrice").innerText = product.price;
  document.getElementById("productSizes").innerText =
    "Sizes: " + product.sizes.join(", ");
  document.getElementById("amazonBtn").href = product.amazonLink;

  const mainImage = document.getElementById("mainImage");
  mainImage.src = `assets/images/products/${product.id}/1.jpg`;

  const thumbs = document.getElementById("thumbnails");
  for (let i = 1; i <= product.imageCount; i++) {
    const img = document.createElement("img");
    img.src = `assets/images/products/${product.id}/${i}.jpg`;
    img.onclick = () => (mainImage.src = img.src);
    thumbs.appendChild(img);
  }

  renderProducts("relatedProducts", 3);

}
