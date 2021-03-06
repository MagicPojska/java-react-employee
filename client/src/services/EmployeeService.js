import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/employees";

export const getAllEmployees = () => {
  return axios.get(BASE_URL);
};

export const createEmployee = (employee) => {
  return axios.post(BASE_URL + "/post", employee);
};

export const getEmployeeById = (employeeId) => {
  return axios.get(BASE_URL + "/" + employeeId);
};

export const updateEmployee = (employeeId, employee) => {
  return axios.put(BASE_URL + "/" + employeeId, employee);
};

export const deleteEmployee = (employeeId) => {
  return axios.delete(BASE_URL + "/" + employeeId);
};
