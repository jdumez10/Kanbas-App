import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import * as client from './client';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState<any>({
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableDate: '',
    course: cid,
  });

  useEffect(() => {
    const fetchAssignment = async () => {
      if (aid) {
        const fetchedAssignment = await client.fetchAssignmentsForCourse(cid!);
        const foundAssignment = fetchedAssignment.find((assignment) => assignment._id === aid);
        if (foundAssignment) setAssignment(foundAssignment);
      }
    };
    fetchAssignment();
  }, [aid, cid]);

  const saveAssignment = async () => {
    if (aid) {
      await client.updateAssignment(aid, assignment);
    } else {
      await client.createAssignment(cid!, assignment);
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const deleteAssignment = async () => {
    if (aid) {
      await client.deleteAssignment(aid);
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {assignment && (
        <>
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
            <input id="wd-name" className="form-control" value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
            <textarea id="wd-description" className="form-control" value={assignment.description} onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-md-12 d-flex align-items-center">
              <label htmlFor="wd-points" className="form-label frm me-1"><strong>Points</strong></label>
              <input id="wd-points" className="form-control position-relative w-100" value={assignment.points} onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-md-12 d-flex align-items-center">
              <label htmlFor="wd-group" className="form-label frm me-1"><strong>Assignment Group</strong></label>
              <div className="position-relative w-100 input-group">
                <select id="wd-group" className="form-control custom-select" disabled>
                  <option value="assignments">ASSIGNMENTS</option>
                </select>
                <span className="input-group-text"><FaChevronDown /></span>
              </div>
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-md-12 d-flex align-items-center">
              <label htmlFor="wd-display-grade-as" className="form-label frm me-1"><strong>Display Grade as</strong></label>
              <div className="position-relative w-100 input-group">
                <select id="wd-display-grade-as" className="form-control custom-select" disabled>
                  <option value="percentage">Percentage</option>
                </select>
                <span className="input-group-text"><FaChevronDown /></span>
              </div>
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-md-12 d-flex align-items-center">
              <label htmlFor="wd-submission-type" className="form-label frm me-1"><strong>Submission Type</strong></label>
              <div className="border p-3 form-control custom-select larger-box">
                <div className="position-relative w-100 input-group mb-3">
                  <select id="wd-submission-type" className="form-control custom-select" disabled>
                    <option value="online">Online</option>
                  </select>
                  <span className="input-group-text"><FaChevronDown /></span>
                </div>
                <label className="form-label"><strong>Online Entry Options</strong></label>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                  <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="wd-website-url" checked />
                  <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                  <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                  <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                  <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-md-12 d-flex align-items-center">
              <label htmlFor="wd-assign" className="form-label frm me-1"><strong>Assign</strong></label>
              <div className="border p-3 form-control custom-select larger-box">
                <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
                <input id="wd-assign-to" type="text" className="form-control" value="Everyone" readOnly />
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
                    <input id="wd-due-date" type="datetime-local" className="form-control" value={assignment.dueDate} onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                    <input id="wd-available-from" type="datetime-local" className="form-control" value={assignment.availableDate} onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                    <input id="wd-available-until" type="datetime-local" className="form-control" value={assignment.dueDate} onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">Cancel</Link>
            <button className="btn btn-danger" onClick={saveAssignment}>Save</button>
            {aid && (
              <button className="btn btn-danger ms-2" onClick={deleteAssignment}>Delete</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
