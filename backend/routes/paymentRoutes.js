const express = require('express');
const { createOrder, verifyPayment, getKey } = require('../controllers/paymentController');

const router = express.Router();

router.post('/order', createOrder);
router.post('/verify', verifyPayment);
router.get('/get-key', getKey);

module.exports = router;
