import styled from "styled-components";

const IntroSection = styled.section`
  margin: 0;
  background-color: #f7f8fb;
  height: 718px;
`;

const IntroTitle = styled.h3`
  text-align: center;
  color: black;
  padding-top: 86px;
  margin-top: 0;
  font-size: 58px;
  font-family: "Gmarket Sans";
`;

const IntroTitlePoint = styled.span`
  color: #f44402;
`;

const IntroText = styled.article`
  color: black;
  font-family: "Gmarket Sans";
  font-size: 28px;
  text-align: center;
  line-height: 128%;
`;
const IntroTextPoint = styled.span`
  color: #f44402;
`;

const IntroLayout = () => {
  return (
    <IntroSection>
      <IntroTitle>
        이젠,
        <IntroTitlePoint>라면</IntroTitlePoint>도
        <br />
        <IntroTitlePoint>편하게 구독</IntroTitlePoint>
        하세요!
      </IntroTitle>
      <IntroText>
        먹고싶은 라면만 고르면
        <br />
        <IntroTextPoint>다 떨어질 때쯤 알아서 배송 오니까!</IntroTextPoint>
        <br />
        <br />
        마트에서 한 묶음씩 사기는 망설여지고,
        <br />
        편의점엔 원하는 라면이 없어 실망했던
        <br />
        여러분들을 위해 <IntroTextPoint>오늘의 라면</IntroTextPoint>이
        탄생했습니다.
      </IntroText>
    </IntroSection>
  );
};

export default IntroLayout;
