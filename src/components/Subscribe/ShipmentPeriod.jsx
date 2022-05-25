import styled from 'styled-components';

const periodList = [
  { key: 0, period: '한 달에 1회' },
  { key: 1, period: '두 달에 1회' },
  { key: 2, period: '세 달에 1회' },
  { key: 3, period: '여섯 달에 1회' },
];

const ShipmentPeriodWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;

  h3 {
    font: ${({ theme }) => theme.font.subhead5};
  }

  ul {
    margin-top: 20px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }

  li {
    width: 100%;
    height: 63px;
    border: solid 2px ${({ theme }) => theme.color.lightgray};
    border-radius: 11px;
    display: flex;
    align-items: center;
    padding: 16px;

    input {
      padding: 0;
      margin: 0;
      width: 16px;
      height: 16px;
    }

    span {
      font: ${({ theme }) => theme.font.caption4};
      font-size: 17px;
      padding-left: 15px;
    }
  }
`;

const ShipmentPeriod = () => {
  return (
    <ShipmentPeriodWrapper>
      <h3>배송주기</h3>
      <ul>
        {periodList?.map(({ key, period }) => (
          <li key={key}>
            <input type="radio" />
            <span className="text">{period}</span>
          </li>
        ))}
      </ul>
    </ShipmentPeriodWrapper>
  );
};

export default ShipmentPeriod;
