import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [moduleObject, setModuleObject] = useState({
    id: "M001",
    name: "Introduction to NodeJS",
    description: "Learn the basics of NodeJS",
    course: "CS5610",
  });

  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");
  const [newScore, setNewScore] = useState(assignment.score);
  const [completed, setCompleted] = useState(assignment.completed);

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  const updateModuleName = async () => {
    try {
      const response = await fetch(`${MODULE_API_URL}/name/${newModuleName}`, {
        method: "POST",
      });
      const data = await response.json();
      setModuleObject(data);
    } catch (error) {
      console.error("Error updating module name:", error);
    }
  };

  const updateModuleDescription = async () => {
    try {
      const response = await fetch(`${MODULE_API_URL}/description/${newModuleDescription}`, {
        method: "POST",
      });
      const data = await response.json();
      setModuleObject(data);
    } catch (error) {
      console.error("Error updating module description:", error);
    }
  };

  const updateAssignmentScore = async () => {
    try {
      const response = await fetch(`${ASSIGNMENT_API_URL}/score/${newScore}`, {
        method: "POST",
      });
      const data = await response.json();
      setAssignment(data);
    } catch (error) {
      console.error("Error updating assignment score:", error);
    }
  };

  const updateAssignmentCompleted = async () => {
    try {
      const response = await fetch(`${ASSIGNMENT_API_URL}/completed/${completed}`, {
        method: "POST",
      });
      const data = await response.json();
      setAssignment(data);
    } catch (error) {
      console.error("Error updating assignment completed:", error);
    }
  };

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />

      <h4>Retrieving Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />

      <h4>Updating Module Name</h4>
      <input
        className="form-control mb-2"
        value={newModuleName}
        onChange={(e) => setNewModuleName(e.target.value)}
      />
      <button
        id="wd-update-module-name"
        className="btn btn-primary"
        onClick={updateModuleName}
      >
        Update Module Name
      </button>
      <hr />

      <h4>Updating Module Description</h4>
      <input
        className="form-control mb-2"
        value={newModuleDescription}
        onChange={(e) => setNewModuleDescription(e.target.value)}
      />
      <button
        id="wd-update-module-description"
        className="btn btn-primary"
        onClick={updateModuleDescription}
      >
        Update Module Description
      </button>
      <hr />

      <h4>Updating Assignment Score</h4>
      <input
        type="number"
        className="form-control mb-2"
        value={newScore}
        onChange={(e) => setNewScore(parseInt(e.target.value, 10))}
      />
      <button
        id="wd-update-assignment-score"
        className="btn btn-primary"
        onClick={updateAssignmentScore}
      >
        Update Score
      </button>
      <hr />

      <h4>Updating Assignment Completed</h4>
      <input
        type="checkbox"
        className="form-check-input mb-2"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      <button
        id="wd-update-assignment-completed"
        className="btn btn-primary"
        onClick={updateAssignmentCompleted}
      >
        Update Completed
      </button>
      <hr />
    </div>
  );
}
