#final project
<br>
#캠핑용품 쇼핑몰 & 캠핑장 예약 프로젝트
<br>

### ✅ 프로젝트 소개

사용자들이 캠핑에 필요한 제품을 손쉽게 구매하고, 원하는 캠핑 지역을 예약할 수 있도록 돕는 통합 플랫폼을 구현합니다.
<br><br>

### ✅ 프로젝트 목표

- 프로젝트를 통해 캠핑 문화를 더욱 활성화하고 캠핑에 대한 접근성을 향상시켜 캠핑 문화 활성화
- 다양한 캠핑지역 정보와 리뷰, 캠핑 트렌드 등을 제공하여 사용자들이 캠핑을 더 즐겁 게 계획할 수 있게 다양한 캠핑 정보 제공
- 캠핑장을 예약하고 예약 상태를 확인하여 더욱 편리하게 관리할 수 있게 예약시스템 구현

온라인에서 편리하게 캠핑용품을 구매하고, 필요한 장비를 눈에 띄게 확인하여 원활한 캠핑 계획을 세울 수 있게 하기 위해 기획 
<br>
<br>

### 프로젝트 내용 및 진행과정

프로젝트 진행 과정

- DB 설계 및 디자인  2023.12.15 ~ 2024.01.15
    
    1.DB설계
    
    - [ERD Cloud](https://www.erdcloud.com/d/aKBDjiorgPLKk3mBz)
    - 유저 정보, 주문, 상품후기, 상품후기 댓글, 쇼핑몰 상품, 장바구니, 상품문의, 상품문의 댓글
    
    2.디자인
    
    - 사용한 디자인 툴 : Figma
    
- 개발 시작 2024.01.15 ~ 2024.02.14
    - 협업 툴 : Slack, Git
    - **프로젝트 팀 Git에서 각 Branch를 생성 후 Merge를 통해 코드를 합치고 버전 관리**
    - 팀의 Slack을 별도로 생성하고 소통 하면서 개발 현황을 공유하고 오류 코드 수정
    - 맡은 역할 ( 프론트엔드 )
        1. 홈페이지 메인페이지 디자인
        2. 쇼핑몰 메인 상품리스트, 카테고리별 상품리스트 구현 및 디자인
        3.  상세페이지 구현 및 디자인
        4.  장바구니, 결제페이지, 문의, 리뷰페이지 디자인 구현
- 배포 2024.02.15 ~ 2024.02.20


  <br>
  <br>
  
  DB 설계<br>
  ![스크린샷 2024-03-11 오후 4 01 40](https://github.com/rjswh0503/final-project/assets/141482043/4595d567-84c4-4efd-9c1e-a0baaf0bf16b)<br>
  ERD Cloud를 사용하여 DB설계
유저정보 테이블은 사용자의 기본 정보를 담고 있으며, 이를 기반으로 상품문의, 상품리뷰, 주문, 장바구니 등 테이블과 관계를 맺어 사용자에게 특화된 정보를 제공할 수 있도록 테이블 간의 관계를 ERD 등을 활용하여 명확하게 시각화하고 설계했습니다.
<br><br>

디자인<br>
![스크린샷 2024-03-11 오후 4 04 17](https://github.com/rjswh0503/final-project/assets/141482043/4d26fc0b-47f3-4598-b630-a926149c0227)
<br>
![스크린샷 2024-03-11 오후 4 04 25](https://github.com/rjswh0503/final-project/assets/141482043/0ffa9da7-f8a0-4a58-b2e6-93e86e3747f2)
<br>
사용한 툴 : Figma, 협업용 Slack

Figma의 협업 기능을 적극 활용하여 초기 디자인 스케치와 실시간으로 팀원들과 의견과 아이디어를 공유하고 디자인 수정이 이루어졌습니다.

<br><br>

협업<br>
![스크린샷 2024-03-11 오후 6 48 18](https://github.com/rjswh0503/final-project/assets/141482043/7c3d9fd6-d340-4fb8-b68b-e1bfe79b2f26)
<br>
팀 Git에서 각 Branch를 생성 후 Merge를 통해 코드를 합치고 버전 관리
<br>
팀 프로젝트 Git 주소 : https://github.com/KHfive-guys/camply-main/tree/master
<br>



프로젝트 이미지<br>

![스크린샷 2024-02-22 오전 11 46 07](https://github.com/rjswh0503/rjswh0503/assets/141482043/cc115137-5751-467a-84e3-7938b8e4e521)<br>

메인페이지 MainPage
<br>


![스크린샷 2024-03-11 오후 6 56 27](https://github.com/rjswh0503/final-project/assets/141482043/b0483a81-2273-48a6-b495-89ee861c3b9b)

<br>
쇼핑몰 메인페이지<br>
쇼핑몰 메인페이지 디자인 
react-slick 라이브러리를 이용한 쇼핑몰 메인페이지 이미지 슬라이드 구현

useNavigate 라이브러리를 사용하여 카테고리 클릭 시 각 카테고리 페이지로 이동
<br>

![스크린샷 2024-03-11 오후 7 02 33](https://github.com/rjswh0503/final-project/assets/141482043/8034e49b-711b-439e-9bda-971ffd62a44b)
<br>
메인페이지 상품리스트 (신상품)

Get을 사용하여 Spring Boot API에서 데이터를 가져와서 상품리스트를 보여줌

한 페이지당 5개의 아이템만 보이게 Pagination 구현
<br>

![스크린샷 2024-03-11 오후 7 08 51](https://github.com/rjswh0503/final-project/assets/141482043/53f57d8f-27bf-426c-99ed-95c1039e3ed0)

<br>
Get을 사용하여 Spring Boot API에서 데이터를 가져와서 상품리스트를 보여줌

한 페이지당 4개의 아이템만 보이게 Slide 구현

<br>

![스크린샷 2024-03-11 오후 7 10 12](https://github.com/rjswh0503/final-project/assets/141482043/61f5eaa5-a14c-4763-b5ee-4764f02f822d)
<br>

![스크린샷 2024-03-11 오후 7 16 40](https://github.com/rjswh0503/final-project/assets/141482043/b21c244e-2db1-4c02-b45b-74245603125c)
<br>

상품 클릭시 상품 상세정보 페이지로 이동

상세정보는  useParams훅을 사용하여 productId 매개변수를 추출하여 구현
장바구니 클릭시 장바구니 페이지로 이동
결제하기 클릭시 결제하기 페이지로 이동 

상세정보 리뷰 문의 클릭시 각 요소 위치로 이동
<br>
![스크린샷 2024-03-11 오후 7 17 36](https://github.com/rjswh0503/final-project/assets/141482043/de01bcef-eb83-47e1-a4af-8ed9edb88574)
<br>
장바구니 페이지 디자인
<br>
장바구니를 클릭하면 상품 목록이 장바구니에 담기도록 테이블 형식으로 디자인을 구현
<br>
![스크린샷 2024-03-11 오후 7 20 06](https://github.com/rjswh0503/final-project/assets/141482043/a54defd8-c8ff-43e5-98a3-7cbb6edc6d01)
<br>
![스크린샷 2024-03-11 오후 7 20 15](https://github.com/rjswh0503/final-project/assets/141482043/5814a104-2dc5-4be9-b6f6-2f979e839b2f)
<br>
결제페이지
<br>
주문하기 클릭시 상품 정보가 담길 수 있게 테이블 형식으로 구현 
 input 사용하여 사용자가 입력할 수 있게 구현
 <br>

 - 프로젝트 참고 사이트
    
    [오캠몰](https://www.ocamall.com/)
   
