import styled from 'styled-components';
import ReviewInfo from '../components/review/ReviewInfo';
import ImageSlide from '../components/review/ImageSlide';
import ReviewText from '../components/review/ReviewText';

function ReviewPage() {
  return (
    <>
      <h2>asd</h2>
      <StyledRoot>
        <h1>asdf</h1>
        <ReviewInfo />
        <ImageSlide />
        <ReviewText />
      </StyledRoot>
    </>
  );
}

export default ReviewPage;

const StyledRoot = styled.div`
  font-family: 'GmarketSansMedium';

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
