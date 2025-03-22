import * as repository from '../repository/orderRepository.js';

export const addOrderList = async(req, res) => {
    const result = await repository.addOrderList(req.body);

    res.json(result);
    res.end();
}

// cart delete
export const removeCartItem = async(req, res) => {
    const result = await repository.removeCartItem(req.body);

    res.json(result);
    res.end();
}