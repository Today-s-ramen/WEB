import styled from 'styled-components';
import ReviewCardSection from './ReviewCard';

const StyleRoot = styled.section`
  background-color: #ffc78e;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 119px;
  padding-bottom: 126px;
  overflow: hidden;
`;

const ReviewTitle = styled.h1`
  color: black;
  font-family: 'GmarketSansMedium';
  font-size: 45px;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.2;
`;
const SubTitle = styled.span`
  display: inline-block;
  font-size: 28px;
  color: #f44420;
  margin: 20px;
`;

const ReviewSlide = () => {
  return (
    <StyleRoot>
      <ReviewTitle>
        <SubTitle>고민하지 마세요</SubTitle> <br />
        이미 많은 분들이 <br />
        오늘의 라면을 시작했어요!
      </ReviewTitle>
      <ReviewCardSection />
    </StyleRoot>
  );
};

export default ReviewSlide;
