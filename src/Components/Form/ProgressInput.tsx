import React from 'react';
import { useForm } from 'react-hook-form';
import '../../App.css';

export interface UserProgress {
  name: string;
  progress: number;
}

export const ProgressInput: React.SFC = () => {
  const { register, handleSubmit } = useForm<UserProgress>();
  const onSubmit = (data: UserProgress) => {
    console.log('data', data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <div className="container">
          <label htmlFor="class">Class</label>
          <input type="text" id="class" name="class" ref={register} />
          <label htmlFor="progress">Progress</label>
          <input type="number" id="progress" name="progress" ref={register} />
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};
export default ProgressInput;
