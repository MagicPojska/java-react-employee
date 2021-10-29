import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/employees";

export const getAllEmployees = () => {
  try {
    const response = axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
};
