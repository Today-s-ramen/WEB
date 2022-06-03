import styled from 'styled-components';

import ReviewHeader from './ReviewHeader';
import ReviewContent from './ReviewContent';
import API_BASE_URL from 'api';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Review = () => {
  const [review, setReview] = useState(null);
  let { review_id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setReview(null);

        const { data } = await axios.get(`${API_BASE_URL}` + `review/${review_id}`);
        setReview(data.data);
      } catch (e) {
        console.log('error');
      }
    };
    fetchReview();
  }, []);

  if (!review) return null;
  return (
    <ReviewWrapper>
      <ReviewHeader packageName={review.packageName} userName={review.userName} rates={review.rates} />
      <ReviewContent imageList={review.imageList} reviewDetail={review.reviewDetail} />
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  width: 100vw;
`;
