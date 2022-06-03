import styled from 'styled-components';
import Box from 'assets/RamenBox.png';

const StyleRoot = styled.div`
  background-color: #ffeee3;
  display: flex;
  height: 254px;
`;

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 46px;
  margin-bottom: 61px;
  margin-left: 150px;
`;

const TextTitle = styled.h1`
  font-size: 36px;
  font-family: 'GmarketSansBold';
  font-weight: 500;
  color: black;
  margin-bottom: 8px;
`;
const TextContents = styled.p`
  font-size: 17px;
  font-family: 'GmarketSansMedium';
  font-weight: 400;
  margin-bottom: 17px;
`;

const GiftBtn = styled.button`
  width: 100px;
  border: none;
  padding: 0;
  background-color: transparent;
  color: #05377b;
  font-family: 'GmarketSansMedium';
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  text-align: left;
`;

const ImgSection = styled.section`
  margin-left: auto;
  margin-right: 141px;
  overflow: hidden;
`;

const BoxImg = styled.img`
  height: 264px;
  width: 330px;
  margin-top: 47px;
`;

const CouponBanner = () => {
  return (
    <StyleRoot>
      <TextSection>
        <TextTitle>5,000원 웰컴 쿠폰을 쏩니다!</TextTitle>
        <TextContents>
          집들이 선물이나 깜짝 선물로 추천!
          <br />
          좋아하는 라면만 가득 담아 드리세요
        </TextContents>
        <GiftBtn>선물하기 〉</GiftBtn>
      </TextSection>
      <ImgSection>
        <BoxImg src={Box} />
      </ImgSection>
    </StyleRoot>
  );
};

export default CouponBanner;
