import * as React from 'react';
import { FormCustomContainerConnect } from './Components/Formulario/ContainerLogin';
import { Provider } from 'react-redux';
import { store } from './store';


export class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  handleSignIn = (values:any) => {
    console.log(values, 'esto es el response');
  };

  render() {
    return(
      <Provider store={store}>
        <React.Fragment>
          <FormCustomContainerConnect/>
          {/* <EditUserInitial/> */}
          {/* <InitializeFrom/> */}
        </React.Fragment>
      </Provider>

    );
  }
}
