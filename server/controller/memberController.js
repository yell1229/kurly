import * as repository from '../repository/memberRepository.js';

//회원가입
export const memberSignUp = async (req, res) => {
    console.log('memberController req.body', req.body);
    const result = await repository.memberSignup(req.body);

    res.json(result);
    res.end();
}

// id 중복 체크
export const memberIdCheck = async (req,res) => {
    //console.log('memberIdCheck id check--> ',req.body);
    const result = await repository.memberIdCheck(req.body);

    res.json(result);
    res.end();
}

// 로그인
// export const memberLogin = async (req, res) => {
//     //console.log('memberController req.body', req.body);
//     const result = await repository.memberLogin(req.body);

//     res.json(result);
//     res.end();
// }