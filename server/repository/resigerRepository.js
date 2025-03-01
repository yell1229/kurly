import {db} from './db.js';

// 상품등록
export const resigerProduct = async (formData ) => {
    console.log('formData',formData);

    const sql=`
                insert into product(
                                    brand,
                                    cate_depth1,
                                    cate_depth2,
                                    subject,
                                    sub_desc,
                                    price,
                                    dc,
                                    delivery,
                                    event_label,
                                    upload_img,
                                    org_img,
                                    info_imgs,
                                    info_org_imgs,
                                    detail_imgs,
                                    detail_org_imgs,
                                    pdate
                                    )
                values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now())
    `;
    const value=[
        formData.brend ,
        formData.depth1 ,
        formData.depth2 ,
        formData.subject ,
        formData.description ,
        formData.price ,
        formData.dc || 0,
        formData.delivery ,
        formData.event || 0,
        JSON.stringify([formData.uploadImg]) || null,
        JSON.stringify([formData.orgImg]) || null,
        formData.infoImgs || null,
        formData.orgInfoImgs || null,
        formData.detailImgs || null,
        formData.orgDetailImgs || null
    ]
    const [result] = await db.execute(sql,value);
    
    return {'affectedRows': result.affectedRows};
}

// 상품리스트
export const getList = async () => {
    const sql =`
                select  pid,
                    brand,
                    cate_depth1,
                    cate_depth2,
                    subject as name,
                    sub_desc as description,
                    format(price,0) as originalPrice,
                    dc,
                    concat(dc,'%') as discountRate,
                    format((price * (100 - dc) *0.01),0) as discountedPrice,
                    event_label,
                    concat('http://localhost:9000/',upload_img) as image_url
            from product
    `;

    const [result] = await db.execute(sql);

    return result;
}

// 상세 페이지
export const getDetail = async({pid}) => {
    console.log('pid',pid);
    const sql = `
            select  pid,
                    brand,
                    cate_depth1,
                    cate_depth2,
                    subject as name,
                    sub_desc as description,
                    format(price,0) as originalPrice,
                    dc,
                    concat(dc,'%') as discountRate,
                    format((price * (100 - dc) *0.01),0) as discountedPrice,
                    truncate((price * (100 - dc) *0.01),0) as dcPrice,
                    event_label,
                    upload_img as image_url,
                    info_imgs,
                    detail_imgs
            from product
            where pid = ?
    `;
    const [result] = await db.execute(sql,[pid]);
    
    return result;
}