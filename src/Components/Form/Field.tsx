import React from 'react';
import { IErrors, IFormContext, FormContext } from './Form';

/* The available editors for the field */
type Editor = 'textbox' | 'multilinetextbox' | 'dropdown';

export interface IFieldProps {
  id: string;
  label?: string;
  type: string;
  editor?: Editor;
  options?: string[];
  value?: any;
  ref: any;
}

export const Field: React.SFC<IFieldProps> = ({ id, label, editor, options, value, type, ref }) => {
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
