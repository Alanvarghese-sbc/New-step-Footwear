const products = [

  // ===== MEN =====
  {
    id: "G11",
    name: "New Step G11 Classic",
    brand: "New Step",
    category: "Men",
    price: "₹1,299",
    variants: [
      { color: "Maroon", images: ["G111.JPG.jpeg"] },
      { color: "Grey",   images: ["G113.JPG.jpeg"] }
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Classic gents footwear with a premium leather-like finish and cushioned insole for all-day comfort.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "G12",
    name: "New Step G12 Sport",
    brand: "New Step",
    category: "Men",
    price: "₹1,499",
    variants: [
      { color: "Green", images: ["G112.JPG.jpeg"] },
      { color: "Blue",  images: ["G114.JPG.jpeg"] }
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Sporty gents sandal with breathable design and durable rubber outsole for active lifestyles.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "acu-01-G",
    name: "Acupressure Gents Sandal",
    brand: "New Step",
    category: "Men",
    price: "₹999",
    variants: [
      { color: "Black",   images: ["acu-01-G-blk.jpeg"] },
      { color: "Blue",    images: ["acu-01-G-blu.jpeg"] },
      { color: "Mehandi", images: ["acu-01-G-mehandi.jpeg"] }
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Acupressure therapy sandal with magnetic nodules that stimulate pressure points for improved blood circulation and foot health.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "rover",
    name: "New Step Rover",
    brand: "New Step",
    category: "Men",
    price: "₹1,199",
    images: ["rover.jpeg"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Rugged and stylish casual shoe built for everyday use, featuring an anti-slip outsole and cushioned footbed.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "superior",
    name: "New Step Superior",
    brand: "New Step",
    category: "Men",
    price: "₹1,399",
    images: ["superior.jpeg"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Premium gents sandal with superior grip, ergonomic arch support, and a contoured footbed for long-duration wear.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "victor",
    name: "New Step Victor",
    brand: "New Step",
    category: "Men",
    price: "₹1,299",
    images: ["victor.jpeg"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Elegant formal-casual footwear with a refined finish and memory foam insole for superior comfort throughout the day.",
    amazonLink: "https://www.amazon.in/"
  },

  // ===== WOMEN =====
  {
    id: "L001",
    name: "New Step Ladies L001",
    brand: "New Step",
    category: "Women",
    price: "₹999",
    images: ["L001.jpeg", "L001_00.jpeg"],
    sizes: ["3", "4", "5", "6", "7"],
    description: "Elegant ladies footwear combining style and comfort with a lightweight sole and breathable upper material.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "L12",
    name: "New Step Ladies L12",
    brand: "New Step",
    category: "Women",
    price: "₹1,099",
    images: ["L12.JPG.jpeg", "L12-01.jpeg"],
    sizes: ["3", "4", "5", "6", "7"],
    description: "Trendy ladies sandal with a cushioned footbed and fashionable strapped design perfect for casual outings.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "L11",
    name: "New Step Ladies L11",
    brand: "New Step",
    category: "Women",
    price: "₹1,099",
    variants: [
      { color: "Blue",      images: ["L111.JPG.jpeg"] },
      { color: "Tan Brown", images: ["L113.JPG.jpeg"] },
      { color: "Maroon",    images: ["L114.JPG.jpeg"] }
    ],
    sizes: ["3", "4", "5", "6", "7"],
    description: "Stylish ladies sandal available in multiple rich colors, perfect for everyday wear and light outings.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "acu-L-01",
    name: "Acupressure Ladies Sandal",
    brand: "New Step",
    category: "Women",
    price: "₹899",
    variants: [
      { color: "Black", images: ["acu-L-01-blk.jpeg"] },
      { color: "Blue",  images: ["acu-L-01-blu.jpeg"] },
      { color: "Brown", images: ["acu-L-01-brn.jpeg"] }
    ],
    sizes: ["3", "4", "5", "6", "7"],
    description: "Ladies acupressure sandal with therapeutic massage nodules for improved foot circulation and pain relief.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "ladies_mca-01",
    name: "New Step Ladies MCA",
    brand: "New Step",
    category: "Women",
    price: "₹1,199",
    variants: [
      { color: "Brown",      images: ["ladies_mca-01brn.jpeg", "ladies_mca-01brn_1.jpeg"] },
      { color: "Multicolor", images: ["ladies_mca-01multi_1.jpeg"] }
    ],
    sizes: ["3", "4", "5", "6", "7"],
    description: "Premium ladies sandal with a classy contoured design, ideal for both formal gatherings and casual occasions.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "ladies-ortho-01",
    name: "Ladies Ortho Comfort",
    brand: "New Step",
    category: "Women",
    price: "₹1,299",
    variants: [
      { color: "Blue",    images: ["ladies-ortho-01-blu.jpeg"] },
      { color: "Mehandi", images: ["ladies-ortho-01-mehandi.jpeg"] }
    ],
    sizes: ["3", "4", "5", "6", "7"],
    description: "Orthopedic ladies sandal with an extra-cushioned sole and arch support designed for maximum foot health and comfort.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "naina-02-L",
    name: "Naina Ladies Sandal",
    brand: "New Step",
    category: "Women",
    price: "₹1,099",
    variants: [
      { color: "Black",   images: ["naina-02-L-blk.jpeg"] },
      { color: "Brown",   images: ["naina-02-L-brn.jpeg"] },
      { color: "Maroon",  images: ["naina-02-L-maroon.jpeg"] },
      { color: "Mehandi", images: ["naina-02-L-mehandi.jpeg"] }
    ],
    sizes: ["3", "4", "5", "6", "7"],
    description: "The Naina collection blends feminine elegance with robust construction, available in four rich earthy tones.",
    amazonLink: "https://www.amazon.in/"
  },

  // ===== MEDICAL =====
  {
    id: "M001",
    name: "MediStep M001",
    brand: "New Step",
    category: "Medical",
    price: "₹1,599",
    images: ["M001_00.jpeg", "M001_01.jpeg"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Medical-grade diabetic footwear with an extra-depth design and soft seamless lining to protect sensitive feet.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "M9",
    name: "MediStep M9",
    brand: "New Step",
    category: "Medical",
    price: "₹1,499",
    images: ["m9.JPG.jpeg", "m9_01.jpeg"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Comfortable diabetic shoe with padded collar, removable insole, and seamless interior for pressure-free wear.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "M12",
    name: "MediStep M12",
    brand: "New Step",
    category: "Medical",
    price: "₹1,699",
    images: ["M12.jpeg", "M12_01.jpeg"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Advanced diabetic footwear with pressure-relief zones, deep toe box, and anti-microbial lining for foot care.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "offloading",
    name: "Offloading Sandal",
    brand: "New Step",
    category: "Medical",
    price: "₹2,199",
    variants: [
      { color: "Type 1", images: ["offloading-01.jpeg"] },
      { color: "Type 2", images: ["offloading-02.jpeg"] },
      { color: "Type 3", images: ["offloading-03.jpeg"] },
      { color: "Type 4", images: ["offloading-04.jpeg"] }
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Specialized post-operative offloading sandal to reduce plantar pressure on forefoot wounds and surgical sites.",
    amazonLink: "https://www.amazon.in/"
  },
  {
    id: "woundcare",
    name: "Wound Care Shoe",
    brand: "New Step",
    category: "Medical",
    price: "₹2,499",
    images: ["woundcare.jpeg"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Purpose-built wound care footwear with an adjustable strapping system and sterile-friendly inner lining.",
    amazonLink: "https://www.amazon.in/"
  },

  // ===== INSOLE =====
  {
    id: "insole-01",
    name: "Comfort Insole",
    brand: "New Step",
    category: "Insole",
    price: "₹499",
    variants: [
      { color: "Black",       images: ["insole-01-black.jpeg"] },
      { color: "Blue",        images: ["insole-01-blue.jpeg"] },
      { color: "Brown",       images: ["insole-01-brown.jpeg"] },
      { color: "Grey",        images: ["insole-01-grey.jpeg"] },
      { color: "Neon Yellow", images: ["insole-01-neonyellow.jpeg"] },
      { color: "Orange",      images: ["insole-01-orange.jpeg"] },
      { color: "Peach",       images: ["insole-01-peach.jpeg"] },
      { color: "Pink",        images: ["insole-01-rose.jpeg"] }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Ergonomic memory foam insoles with arch support and shock absorption for all-day comfort in any footwear.",
    amazonLink: "https://www.amazon.in/"
  }

];
