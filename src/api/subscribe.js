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

const registerSubscribe = async () => {};

export { getDeliveryOptions, registerSubscribe };
