import {db} from 'db.js';

export const memberLogin = async (formData) => {
    const sql = `
                insert into kurly_signup2(
                        id,
                        pwd,
                        name,
                        email,
                        phone,
                        address,
                        gender,
                        birth)
                values(?, ?, ?, ?, ?, ?, ?, ?, now());
    `;
    const values=[
        formData.id,
        formData.pwd,
        formData.name,
        `${formData.email}@${formData.emaildomain}`,
        `${formData.phone}00`,
        `${formData.address1} ${formData.address2}`,
        formData.gender,
        `${formData.birth1}${formData.birth2}${formData.birth3}`,        
    ];
    console.log('values',values);
    
    const [result] = await db.execute(sql,values);
    console.log('result', result);
    
    //return result;
}