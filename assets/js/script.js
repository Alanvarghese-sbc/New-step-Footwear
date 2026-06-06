// =============================================================
//  StepStyle — Main Script
// =============================================================

/* ----------------------------------------------------------
   HELPER: Resolve the first displayable image for a product
---------------------------------------------------------- */
function getFirstImage(p) {
  const base = `assets/images/products/${p.id}/`;
  if (p.images && p.images.length > 0)         return base + p.images[0];
  if (p.variants && p.variants.length > 0 &&
      p.variants[0].images.length > 0)         return base + p.variants[0].images[0];
  return '';
}

/* ----------------------------------------------------------
   RENDER PRODUCT CARDS
   containerId : id of the grid container
   limit       : max cards to render (null = all)
   category    : filter by category string (null = all)
---------------------------------------------------------- */
function renderProducts(containerId, limit = null, category = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let list = [...products];

  if (category && category !== 'All') {
    list = list.filter(p => p.category === category);
  }
  if (limit) list = list.slice(0, limit);

  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '<p class="no-results">No products found in this category.</p>';
    return;
  }

  list.forEach(p => {
    const imgSrc = getFirstImage(p);
    const hasVariants = p.variants && p.variants.length > 0;

    let badgeHtml = '';
    if (p.category === 'Medical') badgeHtml = '<span class="product-badge badge-medical">Medical</span>';
    else if (p.category === 'Insole') badgeHtml = '<span class="product-badge badge-insole">Insole</span>';
    else if (p.category === 'Women') badgeHtml = '<span class="product-badge badge-women">Women</span>';

    const variantDots = hasVariants
      ? `<div class="variant-dots">${p.variants.slice(0, 4).map(() => '<span class="dot"></span>').join('')}${p.variants.length > 4 ? `<span class="dot-more">+${p.variants.length - 4}</span>` : ''}</div>`
      : '';

    container.innerHTML += `
      <div class="product-card" onclick="window.location='product.html?id=${p.id}'">
        ${badgeHtml}
        <div class="card-img-wrap">
          <img src="${imgSrc}" loading="lazy" alt="${p.name}" onerror="this.style.opacity=0.2">
        </div>
        <div class="card-body">
          <p class="card-category">${p.category}</p>
          <h3 class="card-name">${p.name}</h3>
          ${variantDots}
          <p class="card-price">${p.price}</p>
          <a href="product.html?id=${p.id}" class="btn btn-card" onclick="event.stopPropagation()">View Details</a>
        </div>
      </div>
    `;
  });
}

/* ----------------------------------------------------------
   CATEGORY FILTER (products.html)
---------------------------------------------------------- */
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts('productList', null, btn.dataset.category);
    });
  });
}

/* ----------------------------------------------------------
   INITIAL RENDER CALLS
---------------------------------------------------------- */
renderProducts('featuredProducts', 4);
renderProducts('productList');
initFilter();

/* ----------------------------------------------------------
   PRODUCT DETAIL PAGE
---------------------------------------------------------- */
const params    = new URLSearchParams(window.location.search);
const productId = params.get('id');

if (productId) {
  const product = products.find(p => p.id === productId);

  if (product) {
    // Meta
    document.title = product.name + ' | StepStyle';

    // Basic fields
    const setField = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setField('productName',        product.name);
    setField('productBrand',       product.brand);
    setField('productDescription', product.description);
    setField('productPrice',       product.price);
    setField('productSizes',       'Available Sizes: ' + product.sizes.join(', '));

    const amazonBtn = document.getElementById('amazonBtn');
    if (amazonBtn) amazonBtn.href = product.amazonLink;

    // Image references
    const mainImage      = document.getElementById('mainImage');
    const thumbsContainer = document.getElementById('thumbnails');
    const variantSelector = document.getElementById('variantSelector');

    /* Set main image */
    function setMainImage(src) {
      if (!mainImage) return;
      mainImage.style.opacity = '0';
      setTimeout(() => {
        mainImage.src = src;
        mainImage.style.opacity = '1';
      }, 150);
    }

    /* Render thumbnail strip */
    function renderThumbs(images) {
      if (!thumbsContainer) return;
      thumbsContainer.innerHTML = '';
      images.forEach((filename, i) => {
        const src  = `assets/images/products/${product.id}/${filename}`;
        const thumb = document.createElement('img');
        thumb.src     = src;
        thumb.alt     = product.name;
        thumb.loading = 'lazy';
        if (i === 0) {
          thumb.classList.add('active-thumb');
          setMainImage(src);
        }
        thumb.addEventListener('click', () => {
          thumbsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active-thumb'));
          thumb.classList.add('active-thumb');
          setMainImage(src);
        });
        thumbsContainer.appendChild(thumb);
      });
    }

    /* Flat images (no variants) */
    if (product.images && product.images.length > 0) {
      if (variantSelector) variantSelector.style.display = 'none';
      renderThumbs(product.images);
    }

    /* Variant images */
    if (product.variants && product.variants.length > 0) {
      if (variantSelector) {
        variantSelector.innerHTML = '<p class="variant-label">Select Color:</p>';
        const swatchRow = document.createElement('div');
        swatchRow.className = 'swatch-row';

        product.variants.forEach((v, i) => {
          const btn = document.createElement('button');
          btn.className   = 'swatch-btn' + (i === 0 ? ' active' : '');
          btn.textContent = v.color;
          btn.addEventListener('click', () => {
            swatchRow.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderThumbs(v.images);
          });
          swatchRow.appendChild(btn);
        });

        variantSelector.appendChild(swatchRow);
      }
      renderThumbs(product.variants[0].images);
    }

    /* Related products (same category, exclude self) */
    const relatedContainer = document.getElementById('relatedProducts');
    if (relatedContainer) {
      const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
      if (related.length > 0) {
        related.forEach(p => {
          const imgSrc = getFirstImage(p);
          relatedContainer.innerHTML += `
            <div class="product-card" onclick="window.location='product.html?id=${p.id}'">
              <div class="card-img-wrap">
                <img src="${imgSrc}" loading="lazy" alt="${p.name}" onerror="this.style.opacity=0.2">
              </div>
              <div class="card-body">
                <p class="card-category">${p.category}</p>
                <h3 class="card-name">${p.name}</h3>
                <p class="card-price">${p.price}</p>
                <a href="product.html?id=${p.id}" class="btn btn-card" onclick="event.stopPropagation()">View Details</a>
              </div>
            </div>
          `;
        });
      } else {
        document.querySelector('.related')?.remove();
      }
    }
  }
}
