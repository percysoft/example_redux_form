import * as React from 'react';
import { Login } from './Login';
import { connect } from 'react-redux';
import { setForm } from '../../Actions/form';
import { reduxForm } from 'redux-form';
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
  initialize: any;
}

export class ContainerLogin extends React.Component<IFormContainerProps, {}> {
  constructor(props: IFormContainerProps) {
    super(props);
  }

  componentDidMount() {
    const datas = {
      email:'percytataje',
      password:'percy'
    }
    // this.props.setFormData(datas);
    this.props.initialize(datas);
  }

  onSubmit(values: any) {
    console.log('values', values);
  }

  render() {
    console.log(this.props, 'handleSubmit');
    return(
      <Login
        onSubmit={this.onSubmit}
        handleSubmit={this.props.handleSubmit}/>
    );
  }
}
export let FormCustomContainerConnect = reduxForm({
  form: 'login',
  fields,
  asyncValidate,
})(ContainerLogin);

const mapStateToProps = ({ formData }) => ({ initialValues: formData });

const mapDispatchToProps = (dispatch: any) => ({
  setFormData: (value: object) => dispatch(setForm(value))
});

FormCustomContainerConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormCustomContainerConnect);
