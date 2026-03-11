import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar"

function Course() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.data); // data จาก backend
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      {courses.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id} className="card">
          <div
            className="image-card"
            style={{
              backgroundImage: `url(${course.thumbnailUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>

          <div className="content-card">
            <h4>{course.courseName}</h4>

            <ul className="ul-card">
              <li>
                <p className="card-show">
                  <p>
                    Categories : {course.category}
                  </p>
                  <p>
                    Price : {course.price === 0 ? "Free" : `${course.price} Baht`}
                  </p>
                </p>

                <div className="card-hidden">
                  <p>Level : {course.level}</p>
                  <p>Organization : {course.organization}</p>
                </div>
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Course