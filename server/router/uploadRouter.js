import express from 'express';
import * as controller from '../controller/uploadController.js';
import * as multipleController from '../controller/fileUploadMultiple.js';

const router = express.Router();

router
    .post('/',controller.fileUpload)
    .post('/multiple',multipleController.fileUploadMultiple);

export default router;