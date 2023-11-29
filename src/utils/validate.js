export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid && !isPasswordValid)
    return "Email Id and Password in not valid";
  if (!isEmailValid) return "Email Id in not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
