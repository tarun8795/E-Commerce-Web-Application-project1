const express = require('express');
const Product = require('../models/product');
const router  = express.Router();

// 🔥 SEED DATA (YOUR STATIC PRODUCTS)
router.get('/seed', async (req, res) => {
  try {
    await Product.deleteMany();

    const products = await Product.insertMany([
      {
        name: "Abstract Print Casual Cotton Shirt",
        price: 78,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f1.jpg"
      },
      {
        name: "Tropical Leaf Print Summer Shirt",
        price: 88,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f2.jpg"
      },
      {
        name: "Vintage Floral Pattern Cotton Shirt",
        price: 98,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f3.jpg"
      },
      {
        name: "Soft Blossom White Cotton Shirt",
        price: 140,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f4.jpg"
      },
      {
        name: "Navy Floral Slim Fit Shirt",
        price: 180,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f5.jpg"
      },
      {
        name: "Dual Tone Patchwork Casual Shirt",
        price: 200,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f6.jpg"
      },
      {
        name: "Beige Relaxed Fit Cotton Trousers",
        price: 60,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f7.jpg"
      },
      {
        name: "Elegant Printed V-Neck Top",
        price: 40,
        brand: "Adiddas",
        image: "http://localhost:5000/uploads/f8.jpg"
      }
    ]);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET ALL PRODUCTS
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ✅ GET SINGLE PRODUCT
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg: 'Not found' });
  res.json(product);
});

module.exports = router;