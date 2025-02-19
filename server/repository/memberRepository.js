import {db} from './db.js';
// signup
export const memberSignup = async (formData) => {
    const sql = `
                insert into kurly_signup_me(
                        id,
                        pwd,
                        name,
                        email,
                        phone,
                        address,
                        gender,
                        birth,
                        mdate)
                values(?, ?, ?, ?, ?, ?, ?, ?, now());
    `;
    const values=[
        formData.id,
        formData.pwd,
        formData.name,
        `${formData.email}@${formData.emaildomain}`,
        `${formData.phone}`,
        `${formData.address1} ${formData.address2}`,
        formData.gender || 0,
        `${formData.birth1}${formData.birth2}${formData.birth3}`,        
    ];
    console.log('values',values);
    
    const [result] = await db.execute(sql,values);
    
    return {'result_rows':result.affectedRows};
}

// id dbl check
export const memberIdCheck = async({id}) => {
    const sql = `
                select count(id) as result 
                            from kurly_signup_me
	                        where id= ?
    `;
    const [result] = await db.execute(sql,[id]);
    console.log('idcheck', result);
    
    return result[0];

}