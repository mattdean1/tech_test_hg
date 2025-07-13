import { useState } from 'react';

import { RATE_INCREMENT } from '~/services/onboarding';

export const useRateInput = (recommendedRate: number) => {
  const [rate, setRate] = useState<number>(recommendedRate);

  const incrementRate = () => setRate(rate + RATE_INCREMENT);
  const decrementRate = () => setRate(rate - RATE_INCREMENT);

  return { rate, incrementRate, decrementRate };
};
