import styled from 'styled-components';
import Logo from 'assets/Logo.jpg';

const MainHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 43px;
  height: 80px;

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-bottom: 10px;

    .logo-image {
      width: 186px;
      height: 48px;
    }
  }

  .main-nav {
    display: flex;
    align-items: center;
    width: 480px;
    margin-left: 80px;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: ${({ theme }) => theme.font.headline};
      font-weight: 500;
    }
  }

  .sub-nav {
    display: flex;
    align-items: center;
    width: 454px;
    margin-left: 120px;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: ${({ theme }) => theme.font.subhead2};
      color: ${({ theme }) => theme.color.gray};
    }
  }

  .vertical-line {
    height: 30%;
    border-left: 2px solid ${({ theme }) => theme.color.gray};
    margin-left: 20px;
  }

  .user-button-wrapper {
    width: 180px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .signup {
      border: 0;
      outline: 0;
      background-color: ${({ theme }) => theme.color.white};
      font: ${({ theme }) => theme.font.caption5};
    }
    .signin {
      border: 0;
      outline: 0;
      border-radius: 13px;
      padding: 11px;

      background-color: ${({ theme }) => theme.color.orange};
      color: ${({ theme }) => theme.color.white};
      font: ${({ theme }) => theme.font.caption3};
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <div className="logo-wrapper">
        <img className="logo-image" src={Logo} alt="logo" />
      </div>
      <nav className="main-nav">
        <ul>
          <li>구독하기</li>
          <li>선물하기</li>
          <li>이달의 레시피</li>
          <li>이벤트</li>
        </ul>
      </nav>
      <nav className="sub-nav">
        <ul>
          <li>뜨끈한 리뷰</li>
          <li>라면을 맞혀라!</li>
          <li>라니툰</li>
          <li>공지사항</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <div className="vertical-line"></div>
      <div className="user-button-wrapper">
        <button className="signup">회원가입</button>
        <button className="signin">로그인</button>
      </div>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
