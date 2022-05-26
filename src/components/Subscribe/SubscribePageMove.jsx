import styled from 'styled-components';
import Character from 'assets/Chracater.png';

const PageMoveWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 50px;
  z-index: -1;

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

const SubscribePageMove = () => {
  return (
    <PageMoveWrapper>
      <div className="button-wrapper">
        <button className="prev">이전</button>
        <button className="next">다음</button>
      </div>
      <div className="image-wrapper">
        <img src={Character} alt="character" />
      </div>
    </PageMoveWrapper>
  );
};

export default SubscribePageMove;
