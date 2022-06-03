import styled from 'styled-components';
import { useState, useEffect } from 'react';

import SubscribeTitle from './SubscribeTitle';
import ShipmentPeriod from './ShipmentPeriod';
import ShipmentQuantity from './ShipmentQuantity';
import PeriodNotify from './PeriodNotify';
import SubscribePageMove from './SubscribePageMove';

import { getDeliveryOptions } from 'api/subscribe';

const SubscribeWrapper = styled.div`
  width: 100vw;
  padding: 0 120px;
  margin-top: 30px;
`;

const Subscribe = () => {
  const [periodList, setSelectedPeriod] = useState([]);
  const [quantityList, setSelectedQuantity] = useState([]);

  useEffect(() => {
    getDeliveryOptions()
      .then(({ deliveryPeriodOptions, deliveryQuantityOptions }) => {
        return {
          deliveryPeriodOptions: deliveryPeriodOptions.map(({ option, _id }) => {
            return { key: _id, period: option, selected: false };
          }),
          deliveryQuantityOptions: deliveryQuantityOptions.map(({ option, _id }) => {
            return { key: _id, quantity: option, price: 10000, selected: false };
          }),
        };
      })
      .then(({ deliveryPeriodOptions, deliveryQuantityOptions }) => {
        setSelectedPeriod(deliveryPeriodOptions);
        setSelectedQuantity(deliveryQuantityOptions);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <SubscribeWrapper>
      <SubscribeTitle />
      <ShipmentPeriod periodList={periodList} setSelectedPeriod={setSelectedPeriod} />
      <ShipmentQuantity quantityList={quantityList} setSelectedQuantity={setSelectedQuantity} />
      <SubscribePageMove />
      <PeriodNotify />
    </SubscribeWrapper>
  );
};

export default Subscribe;
