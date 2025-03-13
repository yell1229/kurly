import express from 'express';
import * as controller from '../controller/cartController.js';

const router = express.Router();

router
        .post('/check',controller.checkCart)
        .post('/add',controller.addCart)
        .post('/update',controller.updateCart)
        .post('/getCartList',controller.getCartList)
        .post('/deleteItem',controller.deleteCartItem)
        .post('/setPidUpdate',controller.setPidUpdate);

export default router;