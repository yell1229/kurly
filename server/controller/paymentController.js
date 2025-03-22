import axios from 'axios';

export const paymentKakaopay = async (req, res) => {
    try{
        const {id, item_name, total_amount,quantity} = req.body;
        const KAKAO_ADMIN_KEY = "8ccc326bd3020a9c8d60b26794991220";
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // 주문번호 생성

        const response = await axios.post('https://kapi.kakao.com/v1/payment/ready',
                {
                    "cid": "TC0ONETIME",
                    "partner_order_id": `order_${uniqueSuffix}`,
                    "partner_user_id": id,
                    "item_name": item_name,
                    "quantity": quantity,
                    "total_amount": total_amount,
                    "vat_amount": "0",
                    "tax_free_amount": "0",
                    "approval_url": "http://localhost:3000/success",
                    "fail_url": "http://localhost:3000/fail",
                    "cancel_url": "http://localhost:3000/cancel"
                },{
                    headers: {
                        Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
                        "Content-type": "application/x-www-form-urlencoded",
                    }
                });

        res.json(response.data);
        
    }catch(err){
        console.log('err',err);
        
    }
}