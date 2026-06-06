# 👟 StepStyle — Footwear Showcase Website

A clean, fast, and responsive **footwear discovery platform** built with HTML, CSS, and JavaScript. StepStyle allows users to browse branded shoes and insoles, view detailed product pages, and purchase through trusted platforms like Amazon.

---

## 🌐 Live Preview

> Run locally using any static server (e.g., VS Code Live Server or Python HTTP server)

```bash
# Python
python -m http.server 8000

# Then open:
http://localhost:8000/index.html
```

---

## 📸 Pages

| Page | Route | Description |
|---|---|---|
| Home | `index.html` | Hero banner + featured products |
| Products | `products.html` | Full product listing grid |
| Product Detail | `product.html?id={id}` | Images, description, sizes, Amazon link |
| About | `about.html` | Brand story and mission |
| Contact | `contact.html` | Contact form + info |

---

## 🗂️ Project Structure

```
Footwear/
│
├── index.html              ← Home page
├── products.html           ← All products listing
├── product.html            ← Single product detail
├── about.html              ← About StepStyle
├── contact.html            ← Contact form
│
├── assets/
│   ├── css/
│   │   └── style.css       ← Global styles (Poppins, responsive)
│   ├── js/
│   │   └── script.js       ← Product rendering + detail logic
│   └── images/
│       ├── banners/
│       │   └── banner-bg.png
│       └── products/
│           └── {product-id}/
│               ├── 1.jpg
│               ├── 2.jpg
│               └── ...
│
└── data/
    └── products.js         ← Product data array (the "database")
```

---

## 🛍️ How Products Work

All product data is stored in **`data/products.js`** as a JavaScript array.

### Product Object Structure

```js
{
  id: "L1-zebra",           // Unique ID — must match image folder name
  name: "Puma Runner",      // Display name
  brand: "Puma",            // Brand name
  category: "Men",          // Category (Men / Women / Kids / Insoles)
  price: "₹4,999",          // Display price
  sizes: ["6", "7", "8", "9"],  // Available sizes
  description: "...",       // Short product description
  imageCount: 3,            // Number of images in the folder (1.jpg, 2.jpg, 3.jpg)
  amazonLink: "https://www.amazon.in/..."  // Buy link
}
```

### Adding a New Product

1. **Create an image folder:**
   ```
   assets/images/products/your-product-id/
       1.jpg
       2.jpg
       3.jpg
   ```

2. **Add an entry to `data/products.js`:**
   ```js
   {
     id: "your-product-id",
     name: "Product Name",
     brand: "Brand",
     category: "Men",
     price: "₹2,999",
     sizes: ["6", "7", "8", "9", "10"],
     description: "Short description here.",
     imageCount: 3,
     amazonLink: "https://www.amazon.in/your-product-link"
   }
   ```

> ⚠️ The `id` field **must exactly match** the image folder name.  
> ⚠️ `imageCount` must match the actual number of images in the folder.

---

## 🎨 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & semantics |
| CSS3 | Styling, responsive layout, animations |
| JavaScript (Vanilla) | Dynamic product rendering |
| Bootstrap 5.3 | Navbar + responsive utilities |
| Google Fonts (Poppins) | Typography |

---

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dynamic product rendering from a JS data file
- ✅ Product detail page with image gallery & thumbnail switcher
- ✅ Amazon redirect for purchasing
- ✅ Lazy-loaded images for performance
- ✅ Unified Bootstrap 5 navbar across all pages
- ✅ Contact form with success feedback
- ✅ Dynamic page title on product detail page
- ✅ Active thumbnail highlight on click

---

## 🚀 Roadmap (Planned)

- [ ] Product category filter (Men / Women / Kids / Insoles)
- [ ] Search bar on products page
- [ ] Wishlist using `localStorage`
- [ ] Firebase backend for dynamic product management
- [ ] Admin panel — add/edit/delete products without touching code
- [ ] Firebase Storage for image uploads
- [ ] Deploy on Firebase Hosting

---

## 🐛 Known Limitations

- Products are added **manually** by editing `data/products.js` and uploading images to the folder
- No backend or database yet — everything is static
- Contact form does not send real emails (frontend-only validation)

---

## 👤 Author

**Alan Varghese**  
MCA Project — Footwear Showcase Website  
© 2026 StepStyle. All rights reserved.
