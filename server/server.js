import express from 'express';
import cors from 'cors';
import path from 'path';
import registerRouter from './router/registerRouter.js';
import uploadRouter from './router/uploadRouter.js';
import memberRouter from './router/memberRouter.js';
import reviewRouter from './router/reviewRouter.js';
import inquireRouter from './router/inquireRouter.js';
import cartRouter from './router/cartRouter.js';

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use('/upload_files', express.static(path.join("upload_files"))); 

server.get('/test',(req,res) =>{
    res.send('<h1>화면에 잘 보이는지 테스트 해보세요.</h1>')
});

// 상품등록
server.use('/product', registerRouter);
server.use('/upload', uploadRouter);

// 리뷰
server.use('/review', reviewRouter);

// 상품문의
server.use('/inquire', inquireRouter)

// 회원
server.use('/member',memberRouter);


// 장바구니
server.use('/cart',cartRouter);




server.listen(port,() => {
    console.log(`start------ ->> ${port}`);   
});