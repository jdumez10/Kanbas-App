import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = pathname === linkPath;

        return (
          <Link
            key={link}
            id={`wd-course-${link.toLowerCase()}-link`}
            to={linkPath}
            className={`list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
