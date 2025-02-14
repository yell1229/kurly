import {db} from './db.js';

export const registerProduct = async (formData) => {
    console.log('formData',formData);
    
    const sql = `
            insert into kurly_product(
                        brend,
                        category_depth1,
                        category_depth2, 
                        title, 
                        description, 
                        price, 
                        dc, 
                        title_image, 
                        title_org_image)
        values(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values=[
        formData.brend ,
        formData.depth1 ,
        formData.depth2 ,
        formData.subject ,
        formData.description ,
        formData.price ,
        formData.dc ,
        formData.uploadImg ,
        formData.orgImg
    ]

    const [result] = await db.execute(sql, values);
    console.log('result 확인', result);
    

    return {"result_rows": result.affectedRows};
}

export const getList = async () =>{

    
    const sql = `
                  select 	
                        pid,
                        concat('http://localhost:9000/',title_image) as img,
                        title,
                        description as subTit,
                        price,
                        dc,
                        truncate((price * ((100 - dc)*0.01)),0) as dcPrice
                from kurly_product  
    `;

    const [result] = await db.execute(sql);
    console.log('check',result);
    return result;
}