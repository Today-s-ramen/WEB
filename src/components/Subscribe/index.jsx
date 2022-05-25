import styled from 'styled-components';
import SubscribeTitle from './SubscribeTitle';
import ShipmentPeriod from './ShipmentPeriod';
import ShipmentQuantity from './ShipmentQuantity';
import PeriodNotify from './PeriodNotify';

const SubscribeWrapper = styled.div`
  width: 100vw;
  padding: 0 120px;
  margin-top: 30px;
`;

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <SubscribeTitle />
      <ShipmentPeriod />
      <ShipmentQuantity />
      <PeriodNotify />
    </SubscribeWrapper>
  );
};

export default Subscribe;
