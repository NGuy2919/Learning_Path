import "./content_2.css";
import { useEffect, useState } from "react";

function content_2() {
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
    <div className="content-2">
      <h3 className="title">Course Recommendation</h3>
            <div className="cards">
              {courses.map((course) => (
                <div className="card" key={course.id}>
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
                </div>
              ))}
            </div>
      <button className="btn-more-card"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
      <p>View More</p>
      </button>
    </div>
  );
}
export default content_2;
