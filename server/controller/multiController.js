import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {     
      cb(null, Date.now() + '-' + file.originalname )
    }
  })
 

  export const fileUploadMultiple = (req,res) => {
    
    console.log('req.query ==>>',req.query);
    console.log('req.query.maxFiles ==>>',req.query.maxFiles);
    console.log('req.files-------------->>',req.files);
    
    const maxFiles = parseInt(req.query.maxFiles);
    const upload = multer({ storage: storage }).array('files', maxFiles);

    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            
        }else{

			const deleteFiles = req.body.oldFiles;
			const oldFilesArray = deleteFiles.split(',');

			for(let oldfile of oldFilesArray){
				if(oldfile){
					let filePath = path.join('upload_files/',oldfile);
					if(fs.existsSync(filePath)){
						try{
							fs.unlinkSync(filePath);
						}catch(err){
							console.log('파일삭제 실패',err);
							
						}
					}
				}
			}


            let originalname = [];
            let uploadname = [];
			let oldFiles =[];
            for(let file of req.files){
                originalname.push(file.originalname);
                uploadname.push(`http://localhost:9000/${file.path}`);
				oldFiles.push(file.filename);
            }
            res.json({
                'originalname': originalname,
                'uploadname' : uploadname,
				'oldFiles':oldFiles
            });
            res.end();
        }
    

      })
  }
