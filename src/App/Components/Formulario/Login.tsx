import * as React from 'react';
import { Field } from 'redux-form';
import { RenderField } from '../RenderField';

export const Login = (props:any) =>{
  const { onSubmit, handleSubmit } = props;
  console.log(props, '<<---- son las props');
    return(
      <React.Fragment>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Email</h1>
            <div>
              <Field name="email" component={RenderField} type="text"/>
            </div>
          </div>
          <div>
            <h1>Password</h1>
            <div>
              <Field name="password" component={RenderField} type="text"/>
            </div>
          </div>
          <div>
            <div>
            <button type="submit" >Enviar</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
}
