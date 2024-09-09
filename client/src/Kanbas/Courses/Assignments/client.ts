import axios from "axios";
import { Assignment } from "./types";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: Assignment): Promise<Assignment> => {
  const response = await axios.post(`${ASSIGNMENTS_API}/${courseId}/assignments`, assignment);
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: Partial<Assignment>): Promise<void> => {
  await axios.put(`${REMOTE_SERVER}/api/assignments/${assignmentId}`, assignment);
};

export const deleteAssignment = async (assignmentId: string): Promise<void> => {
  await axios.delete(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
};
