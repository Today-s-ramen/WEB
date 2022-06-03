const getDeliveryOptions = async () => {
  const response = await fetch('/subscribe');
  const {
    success,
    data: { deliveryPeriodOptions, deliveryQuantityOptions },
  } = await response.json();

  return {
    isOK: success,
    deliveryPeriodOptions,
    deliveryQuantityOptions,
  };
};

const postSubscribeOptions = async ({ selectedPeriod, selectedQuantity }) => {
  const bodyData = {
    deliveryPeriod: {
      option: selectedPeriod,
    },
    deliveryQuantity: {
      option: selectedQuantity,
    },
  };
  const { ok } = await fetch('subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  return { isOK: ok };
};

export { getDeliveryOptions, postSubscribeOptions };
