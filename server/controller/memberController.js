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
    const count = result.result.count;
    if(count === 1){       
        const token = jwt.sign({id:req.body.id},'HJgQhhXsvX');
        result = {...result.result,"token":token} ;   
    }
    res.json(result);
    res.end();
}