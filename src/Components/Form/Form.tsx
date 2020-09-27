import React, { Context } from 'react';
import { FormProvider } from './FormContext';

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

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      errors,
      values,
    };
  }
  private haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log(this.state.values);
    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  private validateForm(): boolean {
    // TODO - validate form
    return true;
  }

  private async submitForm(): Promise<boolean> {
    // TODO - submit the form
    return true;
  }

  public render() {
    const { submitSuccess, errors } = this.state;
    const context: IFormContext = {
      ...this.state,
      setValues: this.setValues,
    };
    return (
      <FormContext.Provider value={context}>
        <form onSubmit={this.handleSubmit} noValidate={true}>
          <div className="container">
            {/* TODO - render fields */}
            {this.props.render()}

            <div className="form-group">
              <button type="submit" className="btn btn-primary" disabled={this.haveErrors(errors)}>
                Submit
              </button>
            </div>

            {submitSuccess && (
              <div className="alert alert-info" role="alert">
                Your progress was successfully submitted!
              </div>
            )}
            {submitSuccess === false && !this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, an unexpected error has occurred
              </div>
            )}
            {submitSuccess === false && this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, the form is invalid. Please review, adjust and try again
              </div>
            )}
          </div>
        </form>
      </FormContext.Provider>
    );
  }
}
export default Form;
