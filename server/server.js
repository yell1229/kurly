import express from 'express';
import cors from 'cors';
import path from 'path';
import registerRouter from './router/registerRouter.js';
import uploadRouter from './router/uploadRouter.js';
import memberRouter from './router/memberRouter.js';

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use('/upload_files', express.static(path.join("upload_files"))); 

// 미들웨어
server.use('/product',registerRouter);
server.use('/upload',uploadRouter);
server.use('/member',memberRouter);

server.listen(port,() => {
    console.log(`start------ ->> ${port}`);   
});