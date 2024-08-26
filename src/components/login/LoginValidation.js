function Validation(values) {
  let error = {};

  // Check if both memberId and password are provided
  if (!values.memberId || !values.password) {
    error.memberId = "Please provide a membershipId and password";
  } else {
    error.memberId = "";
  }

  return error;
}

export default Validation;
