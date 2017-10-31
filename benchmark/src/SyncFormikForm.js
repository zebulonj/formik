import React from 'react';
import { withFormik } from 'formik';
import { validate, showResults } from './shared';

const mapPropsToValues = props => ({ username: '', email: '', age: '' });

const Field = ({ label, name, error, touched, ...input }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input name={name} placeholder={label} {...input} />
      {touched &&
        (error &&
          <span>
            {error}
          </span>)}
    </div>
  </div>;

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="username"
        label="Username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
        error={errors.username}
        touched={touched.username}
      />
      <Field
        type="email"
        name="email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={errors.email}
        touched={touched.email}
      />
      <Field
        type="number"
        name="age"
        label="Age"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={errors.email}
        touched={touched.email}
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
    </form>
  );
};

export const SyncFormikForm = withFormik({
  handleSubmit: showResults,
  validate,
  mapPropsToValues,
  displayName: 'BasicForm',
})(MyForm);
