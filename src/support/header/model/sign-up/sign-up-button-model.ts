import axios from "axios";

export const SignUpModel = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
