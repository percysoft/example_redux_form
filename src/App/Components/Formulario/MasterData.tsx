import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const EditUser = (props:any) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">Nombres</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Apellidos</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <button type="submit">Guardar</button>
    </form>
  )
};

const mapStateToProps = (state:any) => ({
  initialValues: {
    firstName: 'Juan',
    lastName: 'Perez'
  }
});

const EditUserTo = reduxForm({
  form: 'edit-user'
})(EditUser);

const EditUserInitial = connect(mapStateToProps)(EditUserTo);

export default EditUserInitial;
