import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/employees";

export const getAllEmployees = () => {
  return axios.get(BASE_URL);
};

export const createEmployee = (employee) => {
  return axios.post(BASE_URL + "/post", employee);
};
