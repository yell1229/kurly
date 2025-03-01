import express from 'express';
import cors from 'cors';
import path from 'path';
import registerRouter from './router/registerRouter.js';
import uploadRouter from './router/uploadRouter.js';
import memberRouter from './router/memberRouter.js';
import reviewRouter from './router/reviewRouter.js';
import inquireRouter from './router/inquireRouter.js';

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use('/upload_files', express.static(path.join("upload_files"))); 

// 상품등록
server.use('/product', registerRouter);
server.use('/upload', uploadRouter);

// 리뷰
server.use('/review', reviewRouter);

// 상품문의
server.use('/inquire', inquireRouter)

server.use('/member',memberRouter);

server.listen(port,() => {
    console.log(`start------ ->> ${port}`);   
});