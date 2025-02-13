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
  


// 이미지 업로드
export const fileUploadMultiple = (req, res) => {

    const maxFiles = parseInt(req.query.maxFiles);
    const upload = multer({ storage: storage }).array('files', maxFiles);

    upload(req, res, function (err) { // 멀터가 실행한 결과 값.
        if (err) {
            console.log(err);
          
        }else{
            console.log('uplod multi file req.file', req.files);
            // console.log('res.req.file',res.req.file);
            
            // res.json({
            //     // 저장된 폴더의 파일명
            //     "uploadFileName": res.req.file.path, // node에서 이름에 ''없어도 되지만, 오류방지차원에서 붙여준다.
            //     // 사용자가 선택한 원래 파일명
            //     "sourceFileName": req.file.originalname,
            //     "oldFile": res.req.file.filename
            // });

            // res 객체를 이용한 전송객체 생성 <-> 같은 기능을 하는 uploadController.js의 res 객체명과 동일하게 정의
            let uploadFileName = [];
            let sourceFileName = [];
            let oldFile = [];

            //req.files 배열의 파일 정보를 가져와서 위의 배열에 추가한다.
            for(const file of req.files){
                uploadFileName.push(file.path);
                sourceFileName.push(file.originalname);
                oldFile.push(file.filename)
            }
            res.send({
                "uploadFileName":uploadFileName,
                "sourceFileName": sourceFileName
            })
        }
      })
}