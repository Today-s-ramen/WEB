import styled from 'styled-components';

import ReviewImage from './ReviewImage';

const ReviewContent = ({ imageList, reviewDetail }) => {
  return (
    <ReviewContentWrapper>
      <ReviewImage imageList={imageList} />
      <ReviewText>{reviewDetail}</ReviewText>
    </ReviewContentWrapper>
  );
};

export default ReviewContent;

const ReviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewText = styled.div`
  width: 800px;
  height: 120px;
  padding: 22px 43px;
  margin: 22px 0 282px 0;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 20px;
  font: ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.gray};
  white-space: pre-wrap;
`;
