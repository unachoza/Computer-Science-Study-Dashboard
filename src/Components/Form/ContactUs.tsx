import React from 'react';
import { Form } from './Form';
import { Field } from './Field';
import { useForm } from 'react-hook-form';

type UserProgress = {
  name: string;
  progress: number;
};

export const ContactUsForm: React.SFC = () => {
  return (
    <Form
      action="http://localhost:4351/api/contactus"
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we can.
          </div>
          <Field id="name" label="Name" />
          <Field id="progress" label="Progress" />
        </React.Fragment>
      )}
    />
  );
};
export default ContactUsForm;
