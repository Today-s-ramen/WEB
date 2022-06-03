import styled from 'styled-components';

import Left from '../../assets/Left.svg';
import Right from '../../assets/Right.svg';

import { useState, useRef, useEffect } from 'react';

const ReviewImage = ({ imageList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TotalSlide = imageList.length - 1;

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TotalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide >= TotalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <ReviewImageWrapper>
      <LeftButton onClick={prevSlide}>
        <img src={Left} alt="왼쪽 화살표" />
      </LeftButton>
      <SlideWrapper>
        <SlideBox ref={slideRef}>
          {imageList.map((item, index) => {
            return <Image key={index} src={item} alt="리뷰 사진" />;
          })}
        </SlideBox>
      </SlideWrapper>
      <RightButton onClick={nextSlide}>
        <img src={Right} alt="오른쪽 화살표" />
      </RightButton>
    </ReviewImageWrapper>
  );
};

export default ReviewImage;

const ReviewImageWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SlideWrapper = styled.div`
  overflow-x: hidden;
  width: 800px;
  height: 800px;
`;

const SlideBox = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 800px;
  height: 800px;
`;

const SlideButton = styled.div`
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.red};
  cursor: pointer;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LeftButton = styled(SlideButton)`
  left: -48px;
`;

const RightButton = styled(SlideButton)`
  right: -48px;
`;
