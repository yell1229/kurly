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
                SELECT 
                        pr.pid, 
                        pr.brand, 
                        pr.cate_depth1,
                        pr.cate_depth2,
                        pr.subject as name,
                        pr.sub_desc as description,
                        format(pr.price,0) as originalPrice,
                        pr.dc,
                        concat(pr.dc,'%') as discountRate,
                        format((pr.price * (100 - pr.dc) *0.01),0) as discountedPrice,
                        pr.event_label,
                        pr.upload_img as image_url,
                        COUNT(re.pid) AS count
                FROM 
                    product pr
                LEFT JOIN 
                    reviews re ON pr.pid = re.pid
                GROUP BY 
                    pr.pid, pr.brand
                ORDER BY
                    pid desc
    `;

    const [result] = await db.execute(sql);

    return result;
}

// 상세 페이지
export const getDetail = async({pid}) => {
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

// pid list
export const getItem = async({pid}) => {
    const array = [];
    pid.forEach((item) => array.push('?'));
    const sql = `
            select  pid,
                    upload_img as image_url
            from product
            where pid in (${array.join(',')})
    `;
    const [result] = await db.execute(sql,pid);
    return result;
}
// filter pid list
export const getFilterItem = async({pid}) => {
    const array = [];
    pid.forEach((item) => array.push('?'));
    const sql = `
            SELECT 
                        pr.pid, 
                        pr.brand, 
                        pr.cate_depth1,
                        pr.cate_depth2,
                        pr.subject as name,
                        pr.sub_desc as description,
                        format(pr.price,0) as originalPrice,
                        pr.dc,
                        concat(pr.dc,'%') as discountRate,
                        format((pr.price * (100 - pr.dc) *0.01),0) as discountedPrice,
                        pr.event_label,
                        pr.upload_img as image_url,
                        COUNT(re.pid) AS count
                FROM 
                    product pr
                LEFT JOIN 
                    reviews re ON pr.pid = re.pid
                where pr.pid in (${array.join(',')})
                GROUP BY 
                    pr.pid, pr.brand
    `;
    const [result] = await db.execute(sql,pid);
    return result;
}
