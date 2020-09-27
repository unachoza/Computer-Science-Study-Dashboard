// import { AxiosInstance } from 'axios';
import React, { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  formValues: undefined;
};

export type ProviderValue = Props; // since you know this is what the provider will be passing

export type DefaultValue = undefined;

export type ContextValue = DefaultValue | ProviderValue;

const FormContext = React.createContext<ContextValue>(undefined);

const FormProvider = (props: Props) => {
  const { children, formValues } = props;

  return <FormContext.Provider value={formValues}>{children}</FormContext.Provider>;
};

const useForm = () => React.useContext(FormContext);

export { FormProvider, useForm };
