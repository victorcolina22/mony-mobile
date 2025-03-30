import { createContext, useContext } from 'react';

export const FormContext = createContext<any | null>(null);
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
};
