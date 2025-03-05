use hrdb2019;
select database();
show tables;

-- 상품 테이블
create table kurly_product(
	pid 				int 			primary key 	auto_increment,
	brend 				varchar(30) 	not null,
    category_depth1 	char(3)			not null,
    category_depth2 	char(3)			not null,
    title 				varchar(50) 	not null,
    description 		varchar(100) ,
    price 				int 			not null,
    dc 					int,
    event_live 			boolean,
    title_image 		varchar(80),
    title_org_image 	varchar(80),
    upload_images 		json,
    org_images			json
);

desc kurly_product;

insert into kurly_product(
					brend,
                    category_depth1,
                    category_depth2, 
                    title, 
                    description, 
                    price, 
                    dc, 
                    event_live, 
                    title_image, 
                    title_org_image)
	values('브랜드','101','001','딸기','딸기는 겨울이 맛있다','18000','10','1','1.jpg','1.jpg');
    
select * from kurly_product;


-- 회원가입
create table kurly_signup(
	pid 				int 				primary key 	auto_increment,
	id 					varchar(10) 		not null,
    pwd			 		varchar(15)			not null,
    name 				varchar(15)			not null,
    email 				varchar(50) 		not null,
    phone 				char(13) 			not null,
    address 			varchar(100) 		not null,
    gender 				char(1),
    birth 				char(8)
);

desc kurly_signup;

insert into kurly_signup(
				id,
                pwd,
                name,
                email,
                phone,
                address,
                gender,
                birth
)
	values('hong', '1234', '홍길동', 'aa@naver.com','010-0000-0000', '강남구', 'm', '19990122');
    
    select * from kurly_signup;
    
    show tables;
    
SELECT 
    pr.pid, 
    pr.brand, 
    pr.cate_depth1,
	pr.cate_depth2,
	pr.subject as name,
	pr.sub_desc as description,
	format(pr.price,0) as originalPrice,
	pr.dc,
	concat(pr.dc,'%') as discountRate,
	format((pr.price * (100 - pr.dc) *0.01),0) as discountedPrice,
	pr.event_label,
	pr.upload_img as image_url,
    COUNT(re.pid) AS review_count
FROM 
    product pr
LEFT JOIN 
    reviews re ON pr.pid = re.pid
GROUP BY 
    pr.pid, pr.brand;
    
    
SELECT 
        pr.pid, 
        pr.brand, 
        pr.cate_depth1,
        pr.cate_depth2,
        pr.subject as name,
        pr.sub_desc as description,
        format(pr.price,0) as originalPrice,
        pr.dc,
        concat(pr.dc,'%') as discountRate,
        format((pr.price * (100 - pr.dc) *0.01),0) as discountedPrice,
        pr.event_label,
        pr.upload_img as image_url,
        COUNT(re.pid) AS count
FROM 
    product pr
LEFT JOIN 
    reviews re ON pr.pid = re.pid
where pr.pid in (1,2,3,4)
GROUP BY 
pr.pid, pr.brand;