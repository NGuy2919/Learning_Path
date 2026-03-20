import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "../../api/courseApi";
import Navbar from "../../components/Navbar";
import "./CourseDetail.css";
import { enrollCourse } from "../../api/enrollmentApi";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    async function loadCourse() {
      setLoading(true);
      setError(null);

      try {
        const res = await getCourseById(id);
        if (!res.data.success) {
          throw new Error(res.data.message || "Failed to load course");
        }
        setCourse(res.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, [id]);

  const handleEnroll = async () => {
      try {
        setEnrolling(true);

        const res = await enrollCourse(course.id);

        // ปกติ Axios จะมาไม่ถึงตรงนี้ถ้า Status ของ HTTP เป็น 4xx หรือ 5xx
        if (!res.success) {
          throw new Error(res.message);
        }

        alert("Enroll success 🎉");
        // ทางเลือกเสริม: สั่ง Redirect ไปที่หน้า Dashboard การเรียนตรงนี้ได้เลย
        // navigate(`/learn/${course.id}`); 
        
      } catch (err) {
        // Axios จะเก็บ JSON response จาก Backend ไว้ใน err.response.data
        const errorMessage = err.response?.data?.message || err.message;
        alert(errorMessage); 
      } finally {
        setEnrolling(false);
      }
    };

  return (
    <div className="detail">
      <Navbar />

        <div style={{ padding: "1rem" }} className="detail-container">
            {loading && <p>Loading course...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {course && (
            <div className="detail-course">
                <div className="de-imgandcontent">
                    <div className="de-img">
                        <img src={course.thumbnailUrl || "../assets/content-rating.png" } alt="" className="img-course" />
                    </div>
                    <div className="de-content">
                        <h2>{course.courseName}</h2>
                        <p><strong>รายละเอียด : </strong>{course.courseDescription}</p>
                        <p>
                        <strong>Category : </strong> {course.category}
                        </p>
                        <p>
                        <strong>Level : </strong> {course.level}
                        </p>
                        <p>
                        <strong>Price : </strong>{" "}
                        {course.price === 0 ? "Free" : `${course.price} Baht`}
                        </p>
                        {course.organization && (
                        <p>
                            <strong>Organization : </strong> {course.organization}
                        </p>
                        )}
                        <button 
                          onClick={handleEnroll}
                          disabled={enrolling}
                          style={{
                            marginTop: "1rem",
                            padding: "10px 20px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            cursor: "pointer"
                          }}
                        >
                          {enrolling ? "Enrolling..." : "Enroll"}
                        </button>
                    </div>

                </div>

                <div className="module">
                    {course.modules?.length > 0 && (
                    <div>
                        <h3>Modules</h3>
                        <ul>
                        {course.modules
                            .sort((a, b) => a.orderIndex - b.orderIndex)
                            .map((module) => (
                            <li key={module.id}>
                                {module.orderIndex}. {module.moduleName}
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
            )}
        </div>
    </div>
  );
}

export default CourseDetail;
