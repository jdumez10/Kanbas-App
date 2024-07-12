const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  const moduleObject = {
    id: "M001",
    name: "Introduction to NodeJS",
    description: "Learn the basics of NodeJS",
    course: "CS5610",
  };
  
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    app.post("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
  
    app.post("/lab5/assignment/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      assignment.score = parseInt(newScore, 10);
      res.json(assignment);
    });
  
    app.post("/lab5/assignment/completed/:isCompleted", (req, res) => {
      const { isCompleted } = req.params;
      assignment.completed = isCompleted === "true";
      res.json(assignment);
    });
  
    app.get("/lab5/module", (req, res) => {
      res.json(moduleObject);
    });
  
    app.get("/lab5/module/name", (req, res) => {
      res.json(moduleObject.name);
    });
  
    app.post("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      moduleObject.name = newName;
      res.json(moduleObject);
    });
  
    app.post("/lab5/module/description/:newDescription", (req, res) => {
      const { newDescription } = req.params;
      moduleObject.description = newDescription;
      res.json(moduleObject);
    });
  }
  