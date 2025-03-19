import axios from "axios";

export default async function axiosApi({type, url, data}){
    let result = null;
    
    try{
        result = await axios({
                        method: type,
                        url : url,
                        data:data
                 }).then(res =>res.data);

    }catch( error){
        console.log(error); 
    }

    return result;
}