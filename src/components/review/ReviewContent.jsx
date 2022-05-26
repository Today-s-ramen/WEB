import styled from 'styled-components';

const ReviewContent = ({ reviewDetail }) => {
  console.log(reviewDetail);

  return (
    <ReviewContentWrapper>
      <ReviewText>{reviewDetail}</ReviewText>
    </ReviewContentWrapper>
  );
};

export default ReviewContent;

const ReviewContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 22px 0 282px 0;
`;

const ReviewText = styled.div`
  width: 800px;
  height: 120px;
  padding: 22px 43px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 20px;
  font: ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.gray};
  white-space: pre-wrap;
`;
