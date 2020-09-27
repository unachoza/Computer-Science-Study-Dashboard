import React from 'react';
import { Field } from './Field';
import { useForm } from 'react-hook-form';

export interface UserProgress {
  name: string;
  progress: number;
}

export const Form: React.SFC = () => {
  const { register, handleSubmit } = useForm<UserProgress>();
  const onSubmit = (data: UserProgress) => {
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
      yes
      <div className="container">
        <div className="alert alert-info" role="alert">
          Enter the information below and we'll get back to you as soon as we can.
        </div>
        <Field type="text" id="name" label="Name" ref={register} />
        <Field type="number" id="progress" label="Progress" ref={register} />
      </div>
    </form>
  );
};
export default Form;
