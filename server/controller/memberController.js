import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

//회원가입
export const memberSignUp = async (req, res) => {
    console.log('memberController req.body', req.body);
    const result = await repository.memberSignup(req.body);

    res.json(result);
    res.end();
}

// id 중복 체크
export const memberIdCheck = async (req,res) => {
    const result = await repository.memberIdCheck(req.body);

    res.json(result);
    res.end();
}

// 로그인
export const memberLogin = async (req, res) => {
    let result = await repository.memberLogin(req.body);
    
    if(result && result.count === 1){       
        const token = jwt.sign({id:req.body.id},'HJgQhhXsvX');
        result = {...result,"token":token} ;   
    }else if(result === undefined){
        result = {count:0};
    }
    res.json(result);
    res.end();
}
// address
export const updateAddr = async (req, res) => {
    console.log(req.body);
    const result = await repository.updateAddr(req.body);

    res.json(result);
    res.end();
}