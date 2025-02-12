import express from 'express';
import cors from 'cors';
import path from 'path';
import productRouter from './router/productRouter.js';
import uploadRouter from './router/uploadRouter.js';

const server = express();
const port = 9000;

// 서버의 공통적인 작업
server.use(express.json()); // json 포멧으로 바꿔서 요청한 곳에 넘겨준다. 없을경우 텍스트로 넘어간다.
server.use(express.urlencoded()); // 한글 인코딩 처리
server.use(cors()); // 다른 서버나, 도메인을 거쳐서 요청이 올 경우.
// 업로드 파일 호출 경로 추가 - 이미지 호출 | 앞의 경로는 url ,  뒤 이미지 저장 폴더이름
server.use('/upload_files', express.static(path.join("upload_files"))); // express.static : 전역으로 사용함. // 저장폴더 연결

// 미들웨어
server.use('/product',productRouter);
server.use('/uploads',uploadRouter);

server.listen(port,() => {
    console.log(`start------ ->> ${port}`);   
});