import axios from "axios";

export const loginCall = async (loginDetails) => {
  try {
    const { email, password } = loginDetails;
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const signupCall = async (signupDetails) => {
  try {
    const response = await axios.post("/api/auth/signup", signupDetails);
    return response;
  } catch (error) {
    console.error(error);
  }
};
