import styled from 'styled-components';
import SubscribeProgressBar from 'assets/SubscribeProgressBar.jpg';

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .progress-list {
    width: 95%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font: ${({ theme }) => theme.font.caption4};

    li:nth-child(1) {
      transform: translateX(15px);
    }
    li:nth-child(2) {
      transform: translateX(10px);
    }
    li:nth-child(3) {
      transform: translateX(5px);
    }
    li:nth-child(4) {
      transform: translateX(-5px);
    }
    li:nth-child(5) {
      transform: translateX(-11px);
    }
  }

  h1 {
    margin-top: 50px;
    font: ${({ theme }) => theme.font.display2};
  }

  .subtitle {
    margin-top: 25px;
    font: ${({ theme }) => theme.font.body4};
    color: ${({ theme }) => theme.color.gray};
  }
`;

const SubscribeTitle = () => {
  return (
    <ProgressBarWrapper>
      <img src={SubscribeProgressBar} alt="progressbar" />
      <ul className="progress-list">
        <li>패키지 선택</li>
        <li>배송주기/수량 선택</li>
        <li>라면 선택</li>
        <li>배송지 입력</li>
        <li>구독신청 완료</li>
      </ul>
      <h1>나에게 맞게 구독해요!</h1>
      <p className="subtitle">원하는 주기로 먹을만큼만 배송 받아보세요</p>
    </ProgressBarWrapper>
  );
};

export default SubscribeTitle;
