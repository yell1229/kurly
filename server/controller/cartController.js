import * as repository from '../repository/cartRepository.js';

// check
export const checkCart = async (req,res) => {
    const result = await repository.checkCart(req.body);
    res.json(result);
    res.end();
}

// add
export const addCart = async (req,res) => {
    const result = await repository.addCart(req.body);
    res.json(result);
    res.end();
}

// qty update 
export const updateCart = async (req,res) => {
    const result = await repository.updateCart(req.body);
    res.json(result);
    res.end();
}

// total cart list
export const getCartList = async (req,res) => {
    const result = await repository.getCartList(req.body);
    res.json(result);
    res.end();
}

// delete cart item
export const deleteCartItem = async (req,res) => {
    const result = await repository.deleteCartItem(req.body);
    res.json(result);
    res.end();
}