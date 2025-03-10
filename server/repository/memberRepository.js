import {db} from './db.js';
// signup
export const memberSignup = async (formData) => {
    const sql = `
                insert into member(
                        id,
                        pwd,
                        name,
                        emailname,
                        emaildomain,
                        phone,
                        address,
                        zipcode,
                        gender,
                        reg_date)
                values(?, ?, ?, ?, ?, ?, ?, ?, ?, now());
    `;

    const values=[
        formData.id,
        formData.pwd,
        formData.name,
        formData.email,
        formData.emaildomain,
        formData.phone,
        `${formData.address1} ${formData.address2}`,
        formData.zipcode || '12334',
        formData.gender || 0       
    ];
    
    const [result] = await db.execute(sql,values);
    
    return {'result_rows':result.affectedRows};
}

// id dbl check
export const memberIdCheck = async({id}) => {
    const sql = `
                select count(id) as result 
                            from member
	                        where id= ?
    `;
    const [result] = await db.execute(sql,[id]);
    
    return result[0];

}

// 로그인
export const memberLogin = async({id,pwd}) => {
    const sql = `
                select count(*) as count,
                        name,
                        address
                from member 
                where id=? and pwd=?
                GROUP BY name, zipcode, address;
    `;

    const [result] = await db.execute(sql,[id,pwd]);   
    return {'result':result[0]};
}