import styled from 'styled-components';

const SubHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
  background-color: ${({ theme }) => theme.color.blue};
  padding: 24px 0;

  p {
    color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.subhead4};
  }
`;

const SubHeader = () => {
  return (
    <SubHeaderWrapper>
      <p>회원가입 즉시 5,000원 웰컴쿠폰을 드려요 💖</p>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
