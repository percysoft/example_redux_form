import { SET_FORM } from '../Actions/form';

type Action = {
  type: string;
  payload?: any;
}

export const formData = (state = {}, action: Action) => {
  switch (action.type) {
    case SET_FORM:
      return action.payload;
    default:
      return state;
  }
};
