import * as repository from '../repository/productRepository.js';

export const registerProduct = async (req, res) => {
    //console.log('Controller formData----->',req.body);
    const result = await repository.registerProduct(req.body);
    res.json(result);
    res.end();
}

// 전체 상품 리스트
export const getList = async (req,res) => {
    console.log('check');
    
    const result = await repository.getList();
    res.json(result);
    res.end();
}