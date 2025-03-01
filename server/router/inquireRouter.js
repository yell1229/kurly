import express from 'express';
import * as controller from '../controller/inquireController.js'

const router = express.Router();

router
    .post('/', controller.registerInquire)
    .post('/getList', controller.getListInquire)
    .post('/answer', controller.registAnswer);


export default router;