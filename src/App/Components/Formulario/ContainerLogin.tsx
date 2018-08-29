import * as React from 'react';
import { Login } from './Login';
import { connect } from 'react-redux';
import { setForm } from './action';
import { reduxForm, formValues } from 'redux-form';
import { validationConfig, getFieldValidation } from '../../Utils/configValidation';
import { schema } from '../Validator/form-schema';

const fields = getFieldValidation(schema);
const asyncValidate = validationConfig(schema);

interface IFormContainerProps {
  handleSubmit(): any;
  pristine: any;
  reset: any;
  submitting: any;
  setFormData(values: object): void;
}

export class ContainerLogin extends React.Component<IFormContainerProps, {}> {
  constructor(props: IFormContainerProps) {
    super(props);
  }

  componentDidMount() {
    const datas = {
      email:'percytataje@gmail.com',
      password:'percy'
    }
    this.props.setFormData(datas);
  }

  onSubmit(values: any) {
    console.log('values', values);
  }

  render() {
    console.log(this.props, '<-----------');
    return(
      <Login
        onSubmit={this.onSubmit}
        handleSubmit={this.props.handleSubmit}
        pristine={this.props.pristine}
        reset={this.props.reset}
        submitting={this.props.submitting}/>
    );
  }
}
export let FormCustomContainerConnect = reduxForm({
  form: 'login',
  fields,
  asyncValidate,
  enableReinitialize: true
})(ContainerLogin);

const mapStateToProps = ({ formData }) => ({ initialValues: formData });

const mapDispatchToProps = (dispatch: any) => ({
  setFormData: (value: object) => dispatch(setForm(value))
});

FormCustomContainerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCustomContainerConnect);
