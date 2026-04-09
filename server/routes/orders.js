const express = require('express');
const jwt     = require('jsonwebtoken');
const Order   = require('../models/Order');
const router  = express.Router();

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
}

router.post('/', auth, async (req, res) => {
  try {
    const { items, total } = req.body;
    const order = await Order.create({ user: req.user.id, items, total });
    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/mine', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});

module.exports = router;
