import * as repository from '../repository/reviewRepository.js';

// review  등록
export const registerReview = async (req,res) => {
    const result = await repository.registerReview(req.body);
    res.json(result);
    res.end();
}

// review 리스트 가져오기
export const getReviewList = async (req,res) => {  
    const result = await repository.getReviewList(req.body);
    res.json(result);
    res.end();
}

// review 전체 이미지 가져오기
export const getTotalImages = async (req,res) => {  
    const result = await repository.getTotalImages(req.body);
    res.json(result);
    res.end();
}

// review 리스트 최신순 가져오기
export const getReviewDateList = async (req,res) => {  
    const result = await repository.getReviewDateList(req.body);
    res.json(result);
    res.end();
}

// count 증가 등록하기
export const getPlusCount = async (req,res) => { 
    console.log('count---->>',req.body);
     
    const result = await repository.getPlusCount(req.body);
    res.json(result);
    res.end();
}

// count 감소 등록하기
export const getMinusCount = async (req,res) => { 
    console.log('count---->>',req.body);
     
    const result = await repository.getMinusCount(req.body);
    res.json(result);
    res.end();
}