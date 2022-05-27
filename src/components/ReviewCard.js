import styled from 'styled-components';
import Img from 'assets/reviewImg.png';

const ReviewCard = styled.article`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 511px;
  width: 336px;
  border-radius: 22px;
  margin: 0 11px 0 11px;
  cursor: pointer;
`;

const ReviewImg = styled.img`
  background-color: black;
  height: 50%;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
`;

const ReviewContents = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  color: black;
  margin: 22px 18px;
`;

const Username = styled.span`
  font-size: 18px;
  margin-bottom: 18px;
`;

const ReviewText = styled.span`
  margin-bottom: 2px;
  line-height: 22px;
`;

const MoreBtn = styled.button`
  width: 60px;
  border: none;
  background-color: transparent;
  margin-bottom: 17px;
  padding: 0;
`;

const Package = styled.span`
  color: #f44402;
  margin-bottom: 2px;
`;

const Products = styled.span`
  font-size: 13px;
`;
const ReviewDate = styled.span`
  font-size: 13px;
  text-align: right;
`;

const ReviewCardSection = () => {
  return (
    <ReviewCard>
      <ReviewImg src={Img} />
      <ReviewContents>
        <Username>***님</Username>
        <ReviewText>
          오늘 배송이와서 바로 라면을 끓여서 먹는중인 데 너무 맛있어서 깜짝 놀랐어요 ㅎㅎ 배송도 굉장히 빨리 와서
          만족합니다!
        </ReviewText>
        <MoreBtn>더보기 &nbsp; 〉 &nbsp;</MoreBtn>
        <Package>자유구성 패키지</Package>
        <Products>소고기미역국라면 외 4개</Products>
        <ReviewDate>2022-02-16</ReviewDate>
      </ReviewContents>
    </ReviewCard>
  );
};

export default ReviewCardSection;
