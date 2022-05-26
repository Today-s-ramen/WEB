import styled from 'styled-components';

const ReviewImage = ({ imageList }) => {
  return (
    <ReviewImageWrapper>
      {imageList.map((item) => {
        return <Image key={item.id} src={item.img} alt="리뷰 사진" />;
      })}
    </ReviewImageWrapper>
  );
};

export default ReviewImage;

const ReviewImageWrapper = styled.div``;

const Image = styled.img`
  width: 800px;
  height: 800px;
`;
