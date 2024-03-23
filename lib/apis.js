import axios from "axios";

const registerUser = async (data) => {
  const { email, password, username } = data;
  try {
    const data = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}users/sign_up`, {
      email,
      password,
      username,
    });
    if (data.data.success) return data.data;
    else return data;
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      return error.response.data;
    }
    return null;
  }
};

export { registerUser };
