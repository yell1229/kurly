import * as repository from '../repository/productRepository.js';

export const registerProduct = async (req, res) => {
    console.log(req.body);
    const result = await repository.registerProduct(req.body);
    res.json(result);
    res.end();
}