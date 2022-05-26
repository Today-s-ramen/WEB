import styled from 'styled-components';

import pic1 from '../../assets/ReviewImage1.png';
import pic2 from '../../assets/ReviewImage2.png';

import ReviewHeader from './ReviewHeader';
import ReviewContent from './ReviewContent';

const reviewData = {
  id: 0,
  packageName: '자유구성 (Single)',
  rates: 5,
  userName: '홍길동',
  imageList: [
    { id: 0, img: pic1 },
    { id: 1, img: pic2 },
  ],
  reviewDatail: `이렇게 하나하나 사오기 힘든데 너무 좋아요!!
친구 선물인데 진짜 좋아요
매일 하나씩 뭐먹을지 고민하는게 즐거워요!`,
};

const Review = () => {
  return (
    <ReviewWrapper>
      <ReviewHeader packageName={reviewData.packageName} userName={reviewData.userName} rates={reviewData.rates} />
      <ReviewContent reviewDetail={reviewData.reviewDatail} />
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
