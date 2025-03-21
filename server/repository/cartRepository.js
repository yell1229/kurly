import {db} from './db.js';

// check
export const checkCart = async ({id,pid}) => {
    console.log('{id,pid}',{id,pid});
    const sql =`
                select count(*) as count from cart
                    where id= ? and pid= ?
    `;

    const result = await db.execute(sql, [id,pid]);
    return result[0][0];
}

// add
export const addCart = async ({id,pid, qty}) => {
    console.log('{id,pid}',{id,pid});
    const sql =`
                insert into cart(id, pid, qty)
	                    values (?, ?, ?)
    `;

    const result = await db.execute(sql, [id,pid,qty]);
    return {'result_rows':result[0].affectedRows};
}

// qty update
export const updateCart = async ({qty, id, pid}) => {
    console.log('{id,pid}',{id,pid});
    const sql =`
                update cart
                    set qty= qty + ?
                    where id = ? and pid= ?
    `;

    const result = await db.execute(sql, [qty, id, pid]);
    return {'result_rows':result[0].affectedRows};
}

// total cart list
export const getCartList = async ({id}) => {
    const sql =`
                select 	c.id, 
                        c.pid, 
                        c.qty,
                        pr.subject, 
                        pr.sub_desc, 
                        pr.price, 
                        pr.dc,
                        format((price * (100 - pr.dc) *0.01),0) as dcPride,
                        concat('http://localhost:9000/', pr.upload_img->>'$[0]') as image
                from cart c,
                     product pr
                where c.pid = pr.pid
                and c.id= ?
    `;

    const result = await db.execute(sql, [id]);
    return result[0];
}


// delete cart item
export const deleteCartItem = async ({id, pid}) => {
    const sql =`
                delete from cart
	                where id= ? and pid= ?
    `;

    const result = await db.execute(sql, [id, pid]);
    return {'result_rows':result[0].affectedRows};
}


// item count update
export const setPidUpdate = async ({id, pid, types}) => {
    const str = (types === 'increase') ?  'qty + 1' :  'qty - 1' ;
    // console.log(types, qty);
    
    const sql =`
                update cart 
                    set qty= ${str}
                    where id = ? and pid = ?
    `;

    const result = await db.execute(sql, [id, pid]);
    return {'result_rows':result[0].affectedRows};
}