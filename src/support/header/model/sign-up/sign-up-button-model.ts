import axios from "axios";

export const getAccessToken = async () => {
  console.log("model");
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
