import multer from 'multer';
// 로컬의 이미지 경로를 찾는다.
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ '-' + file.originalname)
    }
  })
  
const upload = multer({ storage: storage }).single('file');

// 이미지 업로드
export const fileUpload = (req, res) => {

    upload(req, res, function (err) { // 멀터가 실행한 결과 값.
        if (err) {
            console.log(err);
          
        }else{
            console.log('req.file', req.file);
            // console.log('res.req.file',res.req.file);
            
            // res.json({
            //     // 저장된 폴더의 파일명
            //     "uploadFileName": res.req.file.path, // node에서 이름에 ''없어도 되지만, 오류방지차원에서 붙여준다.
            //     // 사용자가 선택한 원래 파일명
            //     "sourceFileName": req.file.originalname,
            //     "oldFile": res.req.file.filename
            // });
            
            res.send({
                "uploadFileName":res.req.file.path,
                "sourceFileName": req.file.originalname
            })
        }
      })
}