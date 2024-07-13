import store from "./store";
import { Provider } from "react-redux";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import * as client from "./Courses/client";
import "./styles.css";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description"
  });

  const fetchCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const addNewCourse = async () => {
    try {
      const newCourse = await client.createCourse(course);
      setCourses([...courses, newCourse]);
      setCourse({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
      });
    } catch (error) {
      console.error("Failed to create course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
      setCourse({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
      });
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={
                <Dashboard 
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              } />
              <Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
