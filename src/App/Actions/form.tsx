
export const SET_FORM = 'SET_FORM';

// ActionCreator
export const setForm = (formData: object): Action => ({
  type: SET_FORM,
  payload: formData
});
