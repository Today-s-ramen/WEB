import styled from 'styled-components';
import kakaotalk from 'assets/subscribeSns.png';
import { useNavigate } from 'react-router-dom';

const StyleRoot = styled.div`
  background-color: #f7f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BannerContainer = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 642px;
  height: 658px;
  margin-top: 135px;
  border-radius: 58px;
  overflow: hidden;
`;
const BannerTitle = styled.h1`
  color: black;
  font-size: 45px;
  font-family: 'GmarketSansMedium';
  font-weight: 400;
  margin-top: 49px;
  margin-bottom: 0;
`;
const SubTitle = styled.span`
  display: inline-block;
  color: #f44420;
  font: ${({ theme }) => theme.font.subhead3};
  margin-bottom: 20px;
`;

const SnsImg = styled.img`
  margin-top: 69px;
  width: 400px;
  height: 394px;
`;

const SubscribeBtn = styled.button`
  background-color: #05377b;
  width: 379px;
  height: 70px;
  border-radius: 60px;
  box-shadow: 0px 7px 0px 0px rgb(6 55 123 / 10%);
  color: white;
  font-weight: 400;
  font-size: 23px;
  font-family: 'GmarketSansMedium';
  margin-top: 32px;
  cursor: pointer;
`;

const AddText = styled.p`
  font-size: 15px;
  color: #9f9fa0;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const SubscribeBanner = () => {
  const navigate = useNavigate();

  return (
    <StyleRoot>
      <BannerContainer>
        <BannerTitle>
          <SubTitle>해외라면을 포함한 100여 종 인기라면!</SubTitle>
          <br />
          다음 결제일 미리 확인하고
          <br />
          구독 변경과 해지도 자유롭게!
        </BannerTitle>
        <SnsImg src={kakaotalk} />
      </BannerContainer>
      <SubscribeBtn onClick={() => navigate('subscribe')}>첫 구독 5,900원부터 시작하기 〉</SubscribeBtn>
      <AddText>※ 스테디셀러 Single 웰컴 쿠폰 적용 시</AddText>
    </StyleRoot>
  );
};

export default SubscribeBanner;
