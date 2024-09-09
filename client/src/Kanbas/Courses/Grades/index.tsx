import React from 'react';
import { useParams } from 'react-router-dom';
import * as db from '../../Database';
import { FaFileImport, FaFileExport, FaCog, FaFilter, FaSearch, FaChevronDown } from 'react-icons/fa';

export default function Grades() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === cid);
  const courseStudents = enrollments.map((enrollment) => db.users.find((user) => user._id === enrollment.user)).filter(Boolean);

  const getGrade = (studentId: string, assignmentId: string) => {
    const gradeRecord = db.grades.find((grade) => grade.student === studentId && grade.assignment === assignmentId);
    return gradeRecord ? gradeRecord.grade : "N/A";
  };

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col d-flex justify-content-end">
          <button type="button" className="btn btn-apply-filters me-2">
            <FaFileImport className="me-2" /> Import
          </button>
          <button type="button" className="btn btn-apply-filters me-2">
            <FaFileExport className="me-2" /> Export
          </button>
          <button type="button" className="btn btn-apply-filters">
            <FaCog />
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="studentSearch" className="form-label fw-bold">Student Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" id="studentSearch" className="form-control search-input" placeholder="Search Students" />
            <span className="input-group-text"><FaChevronDown /></span>
          </div>
        </div>
        <div className="col">
          <label htmlFor="assignmentSearch" className="form-label fw-bold">Assignment Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" id="assignmentSearch" className="form-control search-input" placeholder="Search Assignments" />
            <span className="input-group-text"><FaChevronDown /></span>
          </div>
        </div>
      </div>
      <div className="mb-3 text-start">
        <button type="button" className="btn btn-apply-filters">
          <FaFilter className="me-2" /> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {courseAssignments.map((assignment) => (
                <th key={assignment._id}>
                  <div>{assignment.title}</div>
                  <div className="small-text">Out of {assignment.points}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courseStudents.map((student) => (
              student && (
                <tr key={student._id}>
                  <td className="text-danger text-start">{student.firstName} {student.lastName}</td>
                  {courseAssignments.map((assignment) => (
                    <td key={assignment._id}>{getGrade(student._id, assignment._id)}%</td>
                  ))}
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
