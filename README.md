# React Kurly

목표: 리엑트로 컬리 UI 구현 및 기능들 적용하기

## 기술정보

클라이언트: ReactJS

서버: NodeJS(Express라이브러리 서버구축)

DB: MySQL 

## Notice
- @ 클릭시 상품등록 페이지로 이동
- MySQL 엑셀파일 import 방법 링크 <br>
     🔗 https://docs.google.com/document/d/1i-fSyf0fiAIxes1XgFarcSiYTNz78uyrBF80Sx3AAgg/edit?tab=t.0  <br>
- WBS 구글 스프레드시트 링크 <br>
     🔗 https://docs.google.com/spreadsheets/d/1efKJctb6Yvo3z2QcAqwEk18eivzJ61jYt6foYRShAQk/edit?usp=sharing  <br>
- 배열에서 두개 이상 경로가 있는 이미지 불러오기  <br>
     배열인 값은  쿼리에서 직접 주소를 붙이지 말고 아래처럼 태그 앞에 로컬 호스트 주소 추가하여 map을 통해 값을 추출해주세요 
   ```
   <img src={`http://localhost:9000/${item}`}></img> 
   ```
   <br>

## 제작 목록

In the project directory, you can run:

### `Main`

[http://localhost:3000](http://localhost:3000)


### `Product`

메뉴 리스트 
[http://localhost:3000/goods/list](http://localhost:3000/goods/list)

상품 등록
[http://localhost:3000/goods/new](http://localhost:3000/goods/new)

상품 상세페이지
[http://localhost:3000/goods/detail](http://localhost:3000/goods/detail)

### `Signup`

회원가입
[http://localhost:3000/member/signup](http://localhost:3000/member/signup)

### `Login`

로그인
[http://localhost:3000/member/login](http://localhost:3000/member/login)

회원가입
[http://localhost:3000/member/signup](http://localhost:3000/member/signup)



## 기술

SASS [https://www.npmjs.com/package/sass](https://www.npmjs.com/package/sass)

axios [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)


