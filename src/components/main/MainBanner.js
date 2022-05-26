import React from 'react';
import styled from 'styled-components';
import BgImg from '../../assets/MainBannerBg.png';

const MainBannerSection = styled.section`
  height: 856px;
  width: 100%;
  background-image: url(${BgImg});
  height: 500px;
  background-size: cover;
  padding-bottom: 300px;
  margin: 0;
`;

const SubTitle = styled.div`
  color: black;
  font-size: 28px;
  text-align: center;
  padding-top: 70px;
  font-family: 'GmarketSansMedium';
`;

const SubTitlePoint = styled.span`
  color: #f44402;
  font-size: 28px;
  margin-right: 10px;
`;

const MainTitle = styled.div`
  color: black;
  font-size: 62px;
  text-align: center;
  margin-top: 11px;
  font-family: 'GmarketSansBold';
  font-weight: 400;
`;

const MainTitleTextPoint = styled.span`
  color: #f44402;
  font-size: 62px;
`;

const RamenChooseBtn = styled.button`
  background-color: #05377b;
  display: block;
  height: 67px;
  width: 197px;
  border: none;
  border-radius: 60px;
  font-size: 18px;
  font-family: Gmarket Sans;
  color: white;
  margin: auto;
  margin-top: 35px;
  box-shadow: 0px 7px 0px 0px rgb(6 55 123 / 10%);
  cursor: pointer;
`;
const MainBanner = () => {
  return (
    <MainBannerSection>
      <SubTitle>
        <SubTitlePoint>먹고 싶은 라면만</SubTitlePoint>골라 담아요!
      </SubTitle>
      <MainTitle>
        오늘은 어떤&nbsp;
        <MainTitleTextPoint>라면</MainTitleTextPoint>이 끌리나요?
      </MainTitle>
      <RamenChooseBtn>라면 골라보기 〉 </RamenChooseBtn>
    </MainBannerSection>
  );
};

export default MainBanner;
