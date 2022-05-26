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

const Subscribe = () => {
  const [periodList, setSelectedPeriod] = useState(initialPeriodList);

  return (
    <SubscribeWrapper>
      <SubscribeTitle />
      <ShipmentPeriod periodList={periodList} initialList={initialPeriodList} setSelectedPeriod={setSelectedPeriod} />
      <ShipmentQuantity />
      <PeriodNotify />
    </SubscribeWrapper>
  );
};

export default Subscribe;
