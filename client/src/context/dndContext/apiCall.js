import axios from "axios";

export const getFields = async () => {
  try {
    const data = await axios.get("http://localhost:3001/api/fields/");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const createField = async (type) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/fields/field-item",
      type,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error.response.message);
  }
};
