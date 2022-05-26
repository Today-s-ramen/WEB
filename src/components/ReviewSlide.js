import styled from 'styled-components';
import ReviewCardSection from './ReviewCard';
import { useNavigate } from 'react-router-dom';

const StyleRoot = styled.body`
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
  font-weight: 400;
`;
const SubTitle = styled.span`
  font-size: 28px;
  color: #f44420;
`;

const Slider = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: hidden;
`;

const ReviewSlide = () => {
  const navigate = useNavigate();

  // react-slicks 사용의 흔적... 왜 적용이 안되는지 모르겠다....!!
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <StyleRoot>
      <ReviewTitle>
        <SubTitle>고민하지 마세요</SubTitle> <br />
        이미 많은 분들이 <br />
        오늘의 라면을 시작했어요!
      </ReviewTitle>
      <Slider {...settings}>
        {/* api 안받아서 더미로 넣어둔 컴포넌트들 */}
        <ReviewCardSection onClick={() => navigate('review')} />
        <ReviewCardSection onClick={() => navigate('review')} />
        <ReviewCardSection onClick={() => navigate('review')} />
        <ReviewCardSection onClick={() => navigate('review')} />
        <ReviewCardSection onClick={() => navigate('review')} />
        <ReviewCardSection onClick={() => navigate('review')} />
        <ReviewCardSection onClick={() => navigate('review')} />
      </Slider>
    </StyleRoot>
  );
};

export default ReviewSlide;
