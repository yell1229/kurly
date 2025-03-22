import express from 'express';
import * as controller from '../controller/paymentController.js';

const router = express.Router();

router.post('/qr', controller.paymentKakaopay);

export default router;