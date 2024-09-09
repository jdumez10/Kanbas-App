import React, { useEffect, useState } from 'react';
import { FaPlus, FaEllipsisV, FaSearch, FaTrash } from 'react-icons/fa';
import { MdOutlineAssignment } from 'react-icons/md';
import { BsGripVertical, BsThreeDotsVertical } from 'react-icons/bs';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as client from './client';
import GreenCheckmark from '../Modules/GreenCheckmark';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  availableDate: string;
  dueDate: string;
  points: number;
}

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const [courseAssignments, setCourseAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (cid) {
        const assignments = await client.fetchAssignmentsForCourse(cid);
        setCourseAssignments(assignments);
      }
    };
    fetchAssignments();
  }, [cid]);

  const deleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    setCourseAssignments(courseAssignments.filter((assignment) => assignment._id !== assignmentId));
  };

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50 position-relative">
          <input type="text" id="wd-search-assignment" placeholder="Search..." className="form-control ps-5" />
          <FaSearch className="search-icon" />
        </div>
        <div className="d-flex align-items-center">
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary btn-sm me-2">
            <FaPlus className="button-icon" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger btn-sm" onClick={() => navigate(`new`)}>
            <FaPlus className="button-icon" /> Assignment
          </button>
        </div>
      </div>
      <ul className="list-group p-0">
        <li id="assignments-header" className="d-flex justify-content-between align-items-center list-group-item p-0">
          <div className="d-flex align-items-center p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" />
            <h2 className="mb=0">Assignments</h2>
          </div>
          <div className="d-flex align-items-center pe-3">
            <span className="percentage-badge">40% of Total</span>
            <div className="icon-button">
              <FaPlus />
            </div>
            <div className="icon-button">
              <FaEllipsisV />
            </div>
          </div>
        </li>
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray position-relative">
            <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
              <BsGripVertical className="me-2 fs-3 text-secondary" />
              <div>
                <Link className="wd-assignment-link fs-5 d-block" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <MdOutlineAssignment className="me-2 text-success" />
                  {assignment.title}
                </Link>
                <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {formatDateTime(assignment.availableDate)} | <strong>Due</strong> {formatDateTime(assignment.dueDate)} | {assignment.points} pts
                </div>
              </div>
              <div className="d-flex align-items-center ms-2">
                <GreenCheckmark />
                <BsThreeDotsVertical className="fs-4 text-secondary" />
                <FaTrash className="fs-4 text-danger ms-2" onClick={() => deleteAssignment(assignment._id)} />
              </div>
            </div>
            <div className="border-start border-3 border-success position-absolute top-0 bottom-0 start-0"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
