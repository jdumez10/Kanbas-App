// index.tsx

import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import PeopleDetails from './People/Details';
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { useEffect, useState } from "react";
import * as client from "./client";  // Ensure client is importing from the correct path

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const sectionName = pathname.split("/")[4];
  const formattedSectionName = sectionName ? sectionName.charAt(0).toUpperCase() + sectionName.slice(1) : '';

  return (
    <div id="wd-courses">
      {course && (
        <h2 className="text-danger">
          {course.name}
          {formattedSectionName && ` > ${formattedSectionName}`}
        </h2>
      )}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/new" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleDetails fetchUsers={fetchUsers} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
