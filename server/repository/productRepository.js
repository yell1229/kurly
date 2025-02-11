import {db} from './db.js';

export const registerProduct = async (formData) => {
    const sql = `
        insert into img_test(upload_file, org_file)
	        values(? ,?)
    `;
    const value=[
        formData.uploadFileName,
        formData.sourceFileName
    ];
    const [result] = await db.execute(sql, value);

    //return result;
}