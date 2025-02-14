import express from 'express';
import * as controller from '../controller/productColtroller.js';

const router = express.Router();

router
    .post('/new', controller.registerProduct)
    .get('/all', controller.getList);

export default router;