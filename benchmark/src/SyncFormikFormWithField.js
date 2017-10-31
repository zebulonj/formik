import React from 'react';
import { Formik, Form, Field } from 'formik';
import { validate, showResults } from './shared';

const renderField = ({ label, type, field, form }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input type={type} placeholder={label} {...field} />
      {form.touched[field.name] &&
        (form.errors[field.name] &&
          <span>
            {form.errors[field.name]}
          </span>)}
    </div>
  </div>;

export class SyncFormikFormWithField extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ username: '', email: '', age: '' }}
        validate={validate}
        onSubmit={showResults}
        render={({ handleReset, dirty, isSubmitting }) =>
          <Form>
            <Field
              type="text"
              name="username"
              label="Username"
              component={renderField}
            />
            <Field
              type="email"
              name="email"
              label="Email"
              component={renderField}
            />
            <Field
              type="number"
              name="age"
              label="Age"
              component={renderField}
            />
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <button
                type="button"
                disabled={!dirty || isSubmitting}
                onClick={handleReset}
              >
                Clear Values
              </button>
            </div>
          </Form>}
      />
    );
  }
}
