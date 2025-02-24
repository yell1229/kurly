import * as repository from '../repository/resigerRepository.js';

// 상품 등록
export const resigerProduct = async(req, res) => {
    const result = await repository.resigerProduct(req.body);
    res.json(result);
    res.end();
}

// 상품 리스트
export const getList = async (req, res) => {
    const result = await repository.getList();
    res.json(result);
    res.end();
}

// 상품페이지
export const getDetail = async (req,res) => {
    const result = await repository.getDetail(req.body);
    res.json(result);
    res.end();
}