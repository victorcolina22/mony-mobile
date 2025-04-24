import { createContext, useContext } from 'react';

import { SummaryCardProps } from '..';

export const SummaryCardContext = createContext<SummaryCardProps | null>(null);
export const useSummaryCardContext = () => {
  const context = useContext(SummaryCardContext);
  if (!context) {
    throw new Error(
      'useSummaryCardContext must be used within a SummaryCardContext'
    );
  }
  return context;
};
