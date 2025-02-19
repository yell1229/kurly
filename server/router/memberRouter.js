import express from 'express';
import * as controller from '../controller/memberController.js';

const router = express.Router();

router
    .post('/signup', controller.memberSignUp)
    .post('/idcheck', controller.memberIdCheck);

export default router;