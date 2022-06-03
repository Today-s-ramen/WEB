import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from 'api';

const ReviewCard = styled.article`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 511px;
  width: 336px;
  border-radius: 22px;
  margin: 0 11px 0 11px;
  cursor: pointer;
`;

const ReviewImg = styled.img`
  background-color: black;
  height: 50%;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  min-height: 255px;
`;

const ReviewContents = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 22px 18px;
  font: ${({ theme }) => theme.font.body2};
  min-height: 270px;
`;

const Username = styled.span`
  font-size: 18px;
  margin-bottom: 18px;
`;

const ReviewText = styled.span`
  margin-bottom: 2px;
  line-height: 22px;
  min-height: 65px;
`;

const MoreBtn = styled.button`
  width: 60px;
  border: none;
  background-color: transparent;
  margin-bottom: 17px;
  padding: 0;
`;

const Package = styled.span`
  color: #f44402;
  margin-bottom: 2px;
`;

const Products = styled.span`
  font-size: 13px;
`;
const ReviewDate = styled.span`
  font-size: 13px;
  text-align: right;
  margin-bottom: 32px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const ReviewCardSection = () => {
  const [reviewList, setReviewList] = useState([]);
  const moveReview = useRef();
  const navigate = useNavigate();

  const getReviews = async () => {
    const {
      data: { data },
    } = await axios.get(`${API_BASE_URL}/review`);
    setReviewList(data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  const handleClick = (id) => {
    navigate(`review/${id}`);
  };

  // TODO Carousel
  // const slideReviews = () => {
  //   if (moveReview.current && reviewList) {
  //     moveReview.current.style.transform = 'translateX(330px)';
  //     setReviewList((prevList) => [...prevList.slice(1), prevList[0]]);
  //     changeIndex();
  //   }
  // };

  // const changeIndex = () => {
  //   setReviewList((prevList) => [...prevList.slice(1), prevList[0]]);
  // };

  const showReviewList = () => {
    return reviewList?.map((review) => (
      <ReviewCard onClick={() => handleClick(review._id)} key={review._id}>
        <ReviewImg src={review.thumbnail[0]}></ReviewImg>
        <ReviewContents>
          <Username>{review.userName[0]}**님</Username>
          <ReviewText>{review.description}</ReviewText>
          <MoreBtn>더보기 &nbsp; 〉</MoreBtn>
          <Package>{review.packageName}</Package>
          <Products>
            {review.productList[0]} 외 {review.productList.length - 1}개
          </Products>
          <ReviewDate>{review.reviewDate.slice(0, 10)}</ReviewDate>
        </ReviewContents>
      </ReviewCard>
    ));
  };

  return <ReviewWrapper ref={moveReview}>{showReviewList()}</ReviewWrapper>;
};

export default ReviewCardSection;
