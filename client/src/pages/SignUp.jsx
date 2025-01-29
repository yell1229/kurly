import React from 'react';
import '../scss/signup.scss';

export default function SignUp() {
    return (
        <div className="signup">
            <h2>회원가입</h2>
            <form>
                <div className="form_area">
                    <div className="top_info"><span className='icon_star'>*</span> 필수입력사항</div>

                    <div className="f_wrap">
                        <span>아이디<span className='icon_star'>*</span></span>
                        <div><input type="text" placeholder='아이디를 입력해주세요' /></div>
                    </div>
                    <div className="f_wrap">
                        <span>비밀번호<span className='icon_star'>*</span></span>
                        <div><input type="password" placeholder='비밀번호를 입력해주세요' /></div>
                    </div>
                    <div className="f_wrap">
                        <span>비밀번호확인<span className='icon_star'>*</span></span>
                        <div><input type="password" placeholder='비밀번호를 한번 더 입력해주세요' /></div>
                    </div>
                    <div className="f_wrap">
                        <span>이름<span className='icon_star'>*</span></span>
                        <div><input type="text" placeholder='이름을 입력해 주세요' /></div>
                    </div>
                    <div className="f_wrap">
                        <span>이메일<span className='icon_star'>*</span></span>
                        <div><input type="text" placeholder='예: marketkurly' /></div>
                    </div>
                    <div className="f_wrap">
                        <span>휴대폰<span className='icon_star'>*</span></span>
                        <div>
                            <input type="text" placeholder='숫자만 입력해주세요.' />
                            <button type="button" className="get_number">인증번호 받기</button>
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>주소<span className='icon_star'>*</span></span>
                        <div>
                            <button type="button" className='btn_search_addr'>주소 검색</button>
                            <em>배송지에 따라 상품 정보가 달라질 수 있습니다.</em>
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>성별<span className='icon_star'>*</span></span>
                        <div className='gender_area'>
                            <label><div className='radio'><input type="radio" name="gender" value="m" /><div></div></div>남자</label>
                            <label><div className='radio'><input type="radio" name="gender" value="f" /><div></div></div>여자</label>
                            <label><div className='radio'><input type="radio" name="gender" value="default" checked /><div></div></div>선택안함</label>
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>생년월일<span className='icon_star'>*</span></span>
                        <div>
                            <input type="text" placeholder='YYYY' />
                            <input type="text" placeholder='MM' />
                            <input type="text" placeholder='DD' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>추가입력 사항<span className='icon_star'>*</span></span>
                        <div>
                            <label><input type="radio" placeholder='' />친구초대 추천인 아이디</label>
                            <div>
                                <div><input type="text" placeholder='추천인 아이디 입력' /><button>아이디 확인</button></div>
                                <ul>
                                    <li>가입 후 7일 이내 첫 주문 배송완료 시, 친구초대 적립금이 지급됩니다.</li>
                                    <li>ID 입력시, 대소문자 및 띄어쓰기에 유의 부탁드립니다.</li>
                                    <li>가입 이후는 수정이 불가능합니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 이용약관 */}
                    <div className='f_wrap agree_area'>
                        <span>이용약관동의<span className='icon_star'>*</span></span>
                        <div>
                            <div><label><input type="checkbox" /></label></div>
                            <div><label><input type="checkbox" /></label></div>
                            <div><label><input type="checkbox" /></label></div>
                            <div><label><input type="checkbox" /></label></div>
                            <div><label><input type="checkbox" /></label></div>
                            <div><label><input type="checkbox" /></label></div>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
}

