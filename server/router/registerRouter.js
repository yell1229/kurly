import express from 'express';
import * as controller from '../controller/registerController.js';

const router = express.Router();

router
    .post('/new', controller.resigerProduct)
    .post('/all', controller.getList)
    .post('/detail', controller.getDetail);

export default router;