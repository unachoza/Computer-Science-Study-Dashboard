import React from 'react';
import { IErrors, IFormContext, FormContext } from './Form';

/* The available editors for the field */
type Editor = 'textbox' | 'multilinetextbox' | 'dropdown';

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The drop down items for the field */
  options?: string[];

  /* The field value */
  value?: any;
}

export const Field: React.SFC<IFieldProps> = ({ id, label, editor, options, value }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}

      {editor!.toLowerCase() === 'textbox' && (
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => console.log(e) /* TODO: push change to form values */}
          onBlur={(e: React.FormEvent<HTMLInputElement>) => console.log(e) /* TODO: validate field value */}
          className="form-control"
        />
      )}

      {/* TODO - display validation error */}
    </div>
  );
};
Field.defaultProps = {
  editor: 'textbox',
};
