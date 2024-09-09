// client.js or client.ts

import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

// Ensure findAllUsers is defined and exported
export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

// Other functions
export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

// Ensure other functions are also correctly exported if needed
export const createCourse = async (course: any) => {
  const response = await axios.post(`${REMOTE_SERVER}/api/courses`, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axios.delete(`${REMOTE_SERVER}/api/courses/${courseId}`);
  return response.data;
};

export const fetchAllCourses = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/api/courses`);
  return response.data;
};

export const updateCourse = async (course: any) => {
  const response = await axios.put(`${REMOTE_SERVER}/api/courses/${course._id}`, course);
  return response.data;
};
