import React from 'react';
import { useForm } from 'react-hook-form';
import { UserProgress } from './ContactUs';

interface IFormProps {
  action: string;
  render: () => React.ReactNode;
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: string;
}

export interface IFormState {
  values: IValues;
  errors: IErrors;
  submitSuccess?: boolean;
}
export interface IFormContext extends IFormState {
  setValues: (FormProvider: IValues) => void;
}
export const FormContext = React.createContext;

export const Form: React.SFC = () => {
  const { register, handleSubmit } = useForm<UserProgress>();
  const onSubmit = (data: UserProgress) => {
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
      <div className="container">
        {/* TODO - render fields */}

        <div className="form-group"></div>
      </div>
    </form>
  );
};
export default Form;
