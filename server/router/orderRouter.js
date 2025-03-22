import express from 'express';
import * as controller from '../controller/orderController.js';

const router = express.Router();

router
    .post('/remove', controller.removeCartItem)
    .post('/add', controller.addOrderList);

export default router;