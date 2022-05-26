import styled from 'styled-components';

function ReviewInfo() {
  return (
    <>
      <h1>asdf</h1>
      <StyledHeader>
        <StyledText>여러분도 시작해보세요!</StyledText>
        <StyledTitle>오늘의 라면의 따끈한 후기</StyledTitle>
        <StyledPackage>자유구성 (Single)</StyledPackage>
        <StyledName>정**님</StyledName>
        <StyledRate></StyledRate>
      </StyledHeader>
    </>
  );
}

export default ReviewInfo;

const StyledHeader = styled.div``;
const StyledText = styled.p``;
const StyledTitle = styled.h1``;
const StyledPackage = styled.h3``;
const StyledName = styled.p``;
const StyledRate = styled.div``;
