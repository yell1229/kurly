import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname  )
    }
  })
  
  const upload = multer({ storage: storage }).single('file');

// 파일 저장
export const uploadFile = (req,res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log('uploadFile',err);
            
          return
        }else{
			const oldFile = req.body.oldFile;
			if(oldFile){
				const oldFilePath = path.join('upload_files/',req.body.oldFile);
				if(fs.existsSync(oldFilePath)){
					try{
						fs.unlinkSync(oldFilePath);
						console.log('이전파일삭제 완료');
						
					}catch(err){
						console.log('이전파일 삭제 실패',err);
					}
				}

			}
			
			res.send({
				'upload_name': req.file.path,
				'org_name': req.file.originalname,
				'oldFile':res.req.file.filename
			})
        }

      })
    
}