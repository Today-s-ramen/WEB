import styled from 'styled-components';

import Left from '../../assets/Left.svg';
import Right from '../../assets/Right.svg';

const ReviewImage = ({ imageList }) => {
  return (
    <ReviewImageWrapper>
      <LeftButton>
        <img src={Left} alt="왼쪽 화살표" />
      </LeftButton>
      {imageList.slice(0, 1).map((item) => {
        return <Image key={item.id} src={item.img} alt="리뷰 사진" />;
      })}
      <RightButton>
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

const Image = styled.img`
  width: 800px;
  height: 800px;
`;

const SlideButton = styled.div`
  position: absolute;
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
