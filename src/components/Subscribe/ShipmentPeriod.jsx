import styled from 'styled-components';
import radioOff from 'assets/btn_radio_off.svg';
import radioOn from 'assets/btn_radio_on.svg';

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
`;

const ShipmentPeriodItem = styled.li`
  width: 100%;
  height: 63px;
  border: solid 2px ${(props) => (props.selected ? props.theme.color.orange : props.theme.color.lightgray)};
  border-radius: 11px;
  display: flex;
  align-items: center;
  padding: 16px;

  span {
    font: ${({ theme }) => theme.font.caption4};
    font-size: 17px;
    padding-left: 15px;
  }
`;

const RadioBtn = styled.button`
  border: 0;
  outline: 0;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
`;

const ShipmentPeriod = ({ periodList, initialList, setSelectedPeriod }) => {
  const handleSelect = (selectedKey) => {
    const updatedPeriodListState = initialList.map(({ key, period }) => {
      return {
        key,
        period,
        selected: key === selectedKey,
      };
    });
    setSelectedPeriod(updatedPeriodListState);
  };

  return (
    <ShipmentPeriodWrapper>
      <h3>배송주기</h3>
      <ul>
        {periodList?.map(({ key, period, selected }) => (
          <ShipmentPeriodItem key={key} selected={selected} onClick={() => handleSelect(key)}>
            <RadioBtn bg={selected ? radioOn : radioOff}></RadioBtn>
            <span className="text">{period}</span>
          </ShipmentPeriodItem>
        ))}
      </ul>
    </ShipmentPeriodWrapper>
  );
};

export default ShipmentPeriod;
