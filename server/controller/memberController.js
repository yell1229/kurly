import * as repository from '../repository/memberRepository.js';

export const memberLogin = async (req, res) => {
    //console.log('memberController req.body', req.body);
    const result = await repository.memberLogin(req.body);

    res.json(result);
    res.end();
}