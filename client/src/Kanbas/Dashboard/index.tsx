import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>New Course
        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>Add</button>
        <button className="btn btn-warning float-end me-2" id="wd-update-course-click" onClick={updateCourse}>Update</button>
      </h5>
      <hr />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col">
              <div className="card">
                <FaEllipsisV className="three-dots-menu" />
                <img src={course.image} className="card-img-top" alt={course.name} />
                <div className="card-body">
                  <Link className="wd-dashboard-course-link fs-5 d-block" to={`/Kanbas/Courses/${course._id}/Home`}>
                    {course.name}
                  </Link>
                  <p className="wd-dashboard-course-title card-text">
                    {course.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-small btn-primary">
                      Go
                    </Link>
                    <div className="d-flex">
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-small btn-warning me-2"
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-small btn-danger"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
