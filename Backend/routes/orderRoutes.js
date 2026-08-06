const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  getOrderCount,
} = require("../controllers/orderController");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  isAdmin,
} = require("../middleware/adminMiddleware");

router.post("/place", protect, placeOrder);

router.get("/my-orders", protect, getMyOrders);

router.get("/all-orders", protect, isAdmin, getAllOrders);

router.put(
  "/update/:id",
  protect,
  isAdmin,
  updateOrderStatus
);

module.exports = router;