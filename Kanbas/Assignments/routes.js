import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid);
    res.json(courseAssignments);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssignment);
    res.send(newAssignment);
  });

  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const updatedAssignment = req.body;
    db.assignments = db.assignments.map((assignment) =>
      assignment._id === aid ? { ...assignment, ...updatedAssignment } : assignment
    );
    res.sendStatus(204);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((assignment) => assignment._id !== aid);
    res.sendStatus(204);
  });
}
