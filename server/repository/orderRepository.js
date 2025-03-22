import {db} from './db.js';

export const addOrderList = async(formData) => {

    const values = [
        formData.id,
        formData.selectList.pid,
        formData.tid,
        formData.selectList.qty,
        formData.totalPrice,
        '12345',
        formData.userAddr,
        '-',
        '-'
    ];
    
    const sql = `
                insert into orderlist(
                        type,
                        odate,
                        id, 
                        pid, 
                        tid, 
                        qty, 
                        total_price, 
                        zipcode, 
                        address, 
                        address_detail, 
                        onum)
                values( 'kakao', now(), ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    const result = await db.execute(sql,values);   
    return {'result_rows':result[0].affectedRows};
}

// cart delete
export const removeCartItem = async ({id, pid}) => {
    const sql =`
                delete from cart
	                where id= ? and pid= ?
    `;

    const result = await db.execute(sql, [id, pid]);
    return {'result_rows':result[0].affectedRows};
}