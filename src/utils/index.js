export const getOneErrors = errors => {
  if (Array.isArray(errors) && errors.length > 0) {
    return errors[0];
  }
  return errors;
};
