export const ERROR_MESSAGES = {
  common: 'Ingrese un campo válido',
  required: 'Este campo es obligatorio',
  email: 'Ingrese un correo válido',
  min: (num: number) => `Ingrese como mínimo ${num} carácter(es)`,
  max: (num: number) => `Ingrese como máximo ${num} carácter(es)`,
  lessThan: (num: number) => `El valor debe ser menor que ${num}`,
  integer: 'Ingrese un número entero',
  salary: 'Salario inválido',
  location: 'Ingrese una ubicación válida',
  document: {
    ce: 'Ingrese un Carné de extranjería válido',
    dni: 'Ingrese un DNI válido',
  },
  date: 'Ingrese una fecha válida',
  alphaNumeric: 'Solo caracteres alphanumericos',
};

export const REGEX_VALIDATION = {
  string: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$',
  number: '^[0-9]+$',
  alphanumeric: '^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$',
  alphanumericAddress: '^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\.\\- ]+$',
};

export const validationConfig = (schema: any) => (values: any) => {
  return new Promise((resolve: any, reject: any) => {
    schema.validate(values, {abortEarly: false})
      .then((values: any) => resolve())
      .catch((errors: any) => {
        let reduxFormErrors: any = {};
        errors.inner.forEach((error: any) => {
          reduxFormErrors[error.path] = error.message;
        })
        reject(reduxFormErrors);
      })
  });
};

export const getFieldValidation = (schema: any) => Object.keys(schema.fields);
