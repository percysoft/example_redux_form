
type Action = {
  type: string;
  payload?: any;
}

const setForm = (formData:any):Action => ({
  type:"LOAD_DATA",
  payload: formData
});
export { setForm };
