import express from 'express';
import * as controller from '../controller/uploadController.js';
import * as multiController from '../controller/multiController.js';

const router = express.Router();

router
    .post('/file', controller.uploadFile)
    .post('/multiple', multiController.fileUploadMultiple);

export default router;