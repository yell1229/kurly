import * as repository from '../repository/inquireRepository.js';

// 상품 등록
export const registerInquire = async (req,res) => {
    console.log('req.body',req.body);
    const result = await repository.registerInquire(req.body);
    res.json(result);
    res.end();
}
//상품 리스트 가져오기
export const getListInquire = async (req, res) => {
    const result = await repository.getListInquire(req.body);
    res.json(result);
    res.end();
}
// 답변달기
export const registAnswer = async (req,res) => {
    const result = await repository.registAnswer(req.body);
    res.json(result);
    res.end();
}