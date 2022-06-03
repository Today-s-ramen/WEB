import styled from 'styled-components';
import { convertFromPriceToString } from './textpipe';
import radioOff from 'assets/btn_radio_off.svg';
import radioOn from 'assets/btn_radio_on.svg';

const ShipmentQuantityWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;

  h3 {
    font: ${({ theme }) => theme.font.subhead5};
  }

  ul {
    transform: translateY(20px);
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
`;

const ShipmentQuantityItem = styled.li`
  width: 100%;
  height: 63px;
  border: solid 2px ${(props) => (props.selected ? props.theme.color.orange : props.theme.color.lightgray)};
  border-radius: 11px;
  display: flex;
  align-items: center;
  padding: 16px;

  p {
    width: 98%;
    display: flex;
    justify-content: space-between;
    font: ${({ theme }) => theme.font.caption4};
  }

  span {
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

const ShipmentQuantity = ({ quantityList, setSelectedQuantity }) => {
  const handleSelect = (selectedKey) => {
    const updatedQuantityListState = quantityList.map(({ key, quantity, price }) => {
      return {
        key,
        quantity,
        price,
        selected: key === selectedKey,
      };
    });
    setSelectedQuantity(updatedQuantityListState);
  };

  return (
    <ShipmentQuantityWrapper>
      <h3>배송받을 수량</h3>
      <ul>
        {quantityList?.map(({ key, quantity, price, selected }) => (
          <ShipmentQuantityItem key={key} selected={selected} onClick={() => handleSelect(key)}>
            <RadioBtn bg={selected ? radioOn : radioOff}></RadioBtn>
            <p>
              <span className="quantity">{quantity}</span>
              <span className="price">{convertFromPriceToString(price)}</span>
            </p>
          </ShipmentQuantityItem>
        ))}
      </ul>
    </ShipmentQuantityWrapper>
  );
};

export default ShipmentQuantity;
