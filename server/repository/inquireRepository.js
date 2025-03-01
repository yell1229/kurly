import {db} from './db.js';

// 등록하기
export const registerInquire = async (data) => {
    const sql = `
            insert into inquire(subject, detail_txt, id, pid, answer, date)
                                values(?, ?, ?, ?, ?,  now())
        `;
        const values=[
            data.title,
            data.text,
            data.id,
            data.pid,
            data.answer || 0
        ];
        const [result] = await db.execute(sql,values);
        
        return result;
}

// 리스트 가져오기
export const getListInquire = async ({pid}) => {
    const sql = `
            select 	iid,
                    pid,
                    subject,
                    detail_txt,
                    member.name,
                    ifnull(answer,0) as answer,
                    answer_txt
            from inquire, member
            where inquire.id = member.id
                and inquire.pid = ?
            order by iid desc
        `;

    const [result] = await db.execute(sql,[pid]);
    
    return result;
}

// 답변달기
export const registAnswer = async (data) => {
    const sql = `
            update inquire
                set 
                    answer = 1,
                    answer_txt = ?
                where iid = ?
        `;
    const values = [
        data.text,
        data.iid
    ];
    const [result] = await db.execute(sql,values);
    
    return result;
}