import styled from 'styled-components';
import { useState } from 'react';
import SubscribeTitle from './SubscribeTitle';
import ShipmentPeriod from './ShipmentPeriod';
import ShipmentQuantity from './ShipmentQuantity';
import PeriodNotify from './PeriodNotify';

const SubscribeWrapper = styled.div`
  width: 100vw;
  padding: 0 120px;
  margin-top: 30px;
`;

const initialPeriodList = [
  { key: 0, period: '한 달에 1회', selected: false },
  { key: 1, period: '두 달에 1회', selected: false },
  { key: 2, period: '세 달에 1회', selected: false },
  { key: 3, period: '여섯 달에 1회', selected: false },
];

const initialQuantityList = [
  { key: 0, quantity: '5개(Mini)', price: 7900, selected: false },
  { key: 1, quantity: '10개(Single) + 랜덤 라면토핑', price: 13900, selected: false },
  { key: 2, quantity: '20개(Double) + 랜덤 라면토핑', price: 24900, selected: false },
];

const Subscribe = () => {
  const [periodList, setSelectedPeriod] = useState(initialPeriodList);
  const [quantityList, setSelectedQuantity] = useState(initialQuantityList);

  return (
    <SubscribeWrapper>
      <SubscribeTitle />
      <ShipmentPeriod periodList={periodList} initialList={initialPeriodList} setSelectedPeriod={setSelectedPeriod} />
      <ShipmentQuantity
        quantityList={quantityList}
        initialList={initialQuantityList}
        setSelectedQuantity={setSelectedQuantity}
      />
      <PeriodNotify />
    </SubscribeWrapper>
  );
};

export default Subscribe;
