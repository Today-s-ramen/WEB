import styled from 'styled-components';
import { convertFromPriceToString } from './textpipe';

const quantityList = [
  { key: 0, quantity: '5개(Mini)', price: 7900 },
  { key: 1, quantity: '10개(Single) + 랜덤 라면토핑', price: 13900 },
  { key: 2, quantity: '20개(Double) + 랜덤 라면토핑', price: 24900 },
];

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

    p {
      width: 98%;
      display: flex;
      justify-content: space-between;
    }
    span {
      font: ${({ theme }) => theme.font.caption4};
      font-size: 17px;
      padding-left: 15px;
    }
  }
`;

const ShipmentQuantity = () => {
  return (
    <ShipmentQuantityWrapper>
      <h3>배송받을 수량</h3>
      <ul>
        {quantityList?.map(({ key, quantity, price }) => (
          <li key={key}>
            <input type="radio" />
            <p>
              <span className="quantity">{quantity}</span>
              <span className="price">{convertFromPriceToString(price)}</span>
            </p>
          </li>
        ))}
      </ul>
    </ShipmentQuantityWrapper>
  );
};

export default ShipmentQuantity;
