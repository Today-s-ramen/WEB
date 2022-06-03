import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Character from 'assets/Chracater.png';
import { postSubscribeOptions } from 'api/subscribe';

const PageMoveWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 50px;

  .button-wrapper {
    width: 690px;
    display: flex;
    justify-content: space-between;
    transform: translateX(70px);

    button {
      border: 0;
      outline: 0;
      padding: 20px 150px;
      border-radius: 6px;
      font: ${({ theme }) => theme.font.body6};
      cursor: pointer;
    }

    .prev {
      background-color: ${({ theme }) => theme.color.gray};
      color: ${({ theme }) => theme.color.white};
    }

    .next {
      background-color: ${({ theme }) => theme.color.orange};
      color: ${({ theme }) => theme.color.white};
    }
  }

  .image-wrapper {
    transform: translateX(260px);
  }
`;

const SubscribePageMoveBtns = ({ selectedPeriod, selectedQuantity }) => {
  const handleSubmit = async () => {
    if (!selectedPeriod) return toast.error('구독 주기를 선택해주세요');
    if (!selectedQuantity) return toast.error('구독 수량을 선택해주세요');

    await postSubscribeOptions({
      selectedPeriod: selectedPeriod.period,
      selectedQuantity: selectedQuantity.quantity,
    });
    // 페이지 이동
  };

  const handlePrevMove = () => {};
  return (
    <PageMoveWrapper>
      <div className="button-wrapper">
        <button className="prev">이전</button>
        <button className="next" onClick={handleSubmit}>
          다음
        </button>
      </div>
      <div className="image-wrapper">
        <img src={Character} alt="character" />
      </div>
      <ToastContainer />
    </PageMoveWrapper>
  );
};

export default SubscribePageMoveBtns;
