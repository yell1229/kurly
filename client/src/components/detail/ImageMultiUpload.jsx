import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageMultiUpload({getMultiFilesName}) {
    const [oldFiles, setOldFiles] = useState([]);

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        for(const file of files){
            formData.append('files',file);
        }
        formData.append('oldFiles',oldFiles);
        //for(const [key,value] of formData) console.log('check-->',key,value);
        
        axios.post(`http://localhost:9000/upload/multiple?maxFiles=${files.length}`,formData,{
            headers :{'Content-Type':'multipart/form-data'}
        })
                .then(res => {
                    getMultiFilesName(res.data) ;
                    setOldFiles(res.data.oldFiles);
                })
                .catch(err => console.log(err));
        
    }

    return (
        <>
            <Form.Control type="file" multiple onChange={(e) => handleFileUploadMultiple(e)} />
        </>
    );
}

