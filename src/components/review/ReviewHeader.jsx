import styled from 'styled-components';

import RamenIcon from '../../assets/RamenIcon.svg';

const ReviewHeader = ({ packageName, userName, rates }) => {
  return (
    <ReviewHeaderWrapper>
      <ReviewSubtitle>여러분도 시작해보세요!</ReviewSubtitle>
      <ReviewTitle>오늘의 라면의 따끈한 후기</ReviewTitle>
      <PackageName>{packageName}</PackageName>
      <UserName>{userName[0]}**님</UserName>
      <ReviewRates>
        {[...Array(rates)].map((n, index) => {
          return (
            <Rate key={index}>
              <img src={RamenIcon} />
            </Rate>
          );
        })}
      </ReviewRates>
    </ReviewHeaderWrapper>
  );
};

export default ReviewHeader;

const ReviewHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;
`;

const ReviewSubtitle = styled.p`
  font: ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.gray};
`;

const ReviewTitle = styled.h1`
  font: ${({ theme }) => theme.font.display2};
  font-size: 44px;
  text-align: center;
`;

const PackageName = styled.h3`
  margin-top: 47px;
  font: ${({ theme }) => theme.font.body7};
  font-size: 28px;
`;

const UserName = styled.p`
  margin-top: 17px;
  font: ${({ theme }) => theme.font.subhead1};
  color: ${({ theme }) => theme.color.gray};
`;

const ReviewRates = styled.div`
  display: flex;
  margin-top: 31px;
  gap: 5px;
`;

const Rate = styled.div`
  position: relative;
  width: 82px;
  height: 82px;
  border-radius: 41px;
  background-color: #ffeee3;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
