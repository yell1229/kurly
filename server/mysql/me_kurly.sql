show tables;

-- 회원가입
create table kurly_signup_me(
	id 					varchar(30) 		primary key ,
    pwd			 		varchar(50)			not null,
    name 				varchar(15)			not null,
    email 				varchar(50) 		not null,
    phone 				char(13) 			not null,
    zipcode				char(5),
    address 			varchar(100) 		not null,
    gender 				char(1),
    birth 				char(10),
    mdate	 			datetime
);

-- 상품 테이블
create table kurly_product(
	pid 			int 			primary key 	auto_increment,
    brend			varchar(20)		not null,
    cate_depth1		char(3) 		not null,
    cate_depth2		char(3) 		not null,
    subject			varchar(100)	not null,
    sub_desc		varchar(100) ,
    price 			int  			not null,
    dc				int,
    delivery		char(2)	,
    event_label		boolean,
    upload_img		varchar(100) ,
    org_img 		varchar(50) ,
	info_imgs 		json ,
    info_org_imgs 	json,
    detail_imgs 	json ,
    detail_org_imgs json,
    pdate 			datetime
);

desc kurly_signup_me;
select count(id) as result from kurly_signup_me
	where id='test1';
select * from kurly_product;
select 	
                        pid,
                        concat('http://localhost:9000/',title_image) as img,
                        title,
                        description as subTit,
                        price,
                        dc,
                        truncate((price * ((100 - dc)*0.01)),0) as dcPrice
                from kurly_product  ;

-- 로그인 시 다른 정보 가져오기 group by 없이는  repositoy에서 error
select * from member;
select count(*) as count,
		name,
        zipcode,
        address
from member 
where id='hongs' and pwd='1234'
GROUP BY name, zipcode, address;