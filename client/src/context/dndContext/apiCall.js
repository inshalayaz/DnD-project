import axios from "axios";

export const getFields = async () => {
  try {
    const data = await axios.get("http://localhost:3001/api/fields/");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
