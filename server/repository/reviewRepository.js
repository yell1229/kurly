import {db} from './db.js';

// review 등록
export const registerReview =  async(data) => { 
    const sql = `
        insert into reviews(subject, detail_txt, images, id, pid, count, date)
	                        values(?, ?, ?, ?, ?, ?,  now());
    `;
    const values=[
        data.title,
        data.text,
        data.images,
        data.id,
        data.pid,
        data.count || 0
    ];
    const [result] = await db.execute(sql,values);
    
    return result;
}

// review 리스트 가져오기
export const getReviewList =  async({pid}) => { 
    const sql = `
                select  rid,
                        subject,
                        detail_txt,
                        images,
                        date,
                        pid,
                        member.name,
                        ifnull(count,0) as count
                from reviews,
                     member
                where reviews.id = member.id
                    and reviews.pid = ?;
    `;

    const [result] = await db.execute(sql,[pid]);
    
    return result;
}


// review 전체 이미지 가져오기
export const getTotalImages =  async({pid}) => { 
    const sql = `
    select images from reviews
    where pid = ?
    `;
    
    const [result] = await db.execute(sql,[pid]);
    
    return result;
}

// review 리스트 최신순 가져오기
export const getReviewDateList =  async({pid}) => { 
    const sql = `
                select  rid,
                        subject,
                        detail_txt,
                        images,
                        date,
                        pid,
                        member.name,
                        ifnull(count,0) as count
                from reviews,
                     member
                where reviews.id = member.id
                    and reviews.pid = ?
                order by date desc
    `;

    const [result] = await db.execute(sql,[pid]);
    
    return result;
}

// count 증가 등록하기
export const getPlusCount = async({rid}) => {
    const sql = `
                update reviews
                    set count = ifnull(count,0) + 1
                    where rid = ? 
    `;
    const [result] = await db.execute(sql,[rid]);
    
    return {"result_rows": result.affectedRows };
}

// count 감소 등록하기
export const getMinusCount = async({rid}) => {
    const sql = `
                update reviews
                    set count = ifnull(count,0) - 1
                    where rid = ? 
    `;
    const [result] = await db.execute(sql,[rid]);
    
    return {"result_rows": result.affectedRows };
}
