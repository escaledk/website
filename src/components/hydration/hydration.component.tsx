import * as Styled from './hydration.styled';
import { useEffect, useState } from 'react';
import { IHydrationProps } from './hydration.types';

export const Hydration = ({ children }: IHydrationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? children : <Styled.Loading />}</>;
};
