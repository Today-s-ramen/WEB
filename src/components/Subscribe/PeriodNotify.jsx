import styled from 'styled-components';

const PeriodNotifyWrapper = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) => theme.font.caption5};

  span {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const PeriodNotify = () => {
  return (
    <PeriodNotifyWrapper>
      <p>
        <span>한 달에 1회</span>, 라면 <span>10개씩</span> 배송됩니다.
      </p>
    </PeriodNotifyWrapper>
  );
};

export default PeriodNotify;
