import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js"; 

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app); 
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);
