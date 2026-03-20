import Navbar from "../../components/Navbar.jsx"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getMyCoursesAPI } from "../../api/enrollmentApi"
import "./Profile.css"

function Profile() {
  const [user, setUser] = useState(null)
  const [loadingProfile, setLoadingProfile] = useState(true)
  const [errorProfile, setErrorProfile] = useState(null)
  const navigate = useNavigate()

  const [courses, setCourses] = useState([])
  const [loadingCourses, setLoadingCourses] = useState(true)
  const [errorCourses, setErrorCourses] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/login")
      return
    }

    const fetchData = async () => {
      // 1. ดึงข้อมูล Profile
      try {
        const profileRes = await fetch("http://localhost:3000/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const profileData = await profileRes.json()
        
        if (profileData.success) {
          setUser(profileData.user)
        } else {
          setErrorProfile(profileData.message || "Unable to load profile")
        }
      } catch (err) {
        console.error("Profile fetch error:", err)
        setErrorProfile("Unable to load profile")
      } finally {
        setLoadingProfile(false)
      }

      // 2. ดึงข้อมูลคอร์สเรียนที่ลงทะเบียนไว้
      try {
        const coursesData = await getMyCoursesAPI()
        if (coursesData.success) {
          setCourses(coursesData.data)
        } else {
          setErrorCourses(coursesData.message || "Unable to load courses")
        }
      } catch (err) {
        console.error("Courses fetch error:", err)
        // จัดการ error จาก axios
        setErrorCourses(err.response?.data?.message || err.message || "Unable to load courses")
      } finally {
        setLoadingCourses(false)
      }
    }

    fetchData()
  }, [navigate])

  return (
    <div className="profile">
      <Navbar />
      <div className="profile-page">
        <h1>Profile</h1>

        {/* --- ส่วนแสดงข้อมูลผู้ใช้ --- */}
        {loadingProfile && <p>Loading profile...</p>}
        {errorProfile && <p style={{ color: "red" }}>{errorProfile}</p>}

        {user && (
          <div className="profile-card">
            <p><strong>First name:</strong> {user.fname || "-"}</p>
            <p><strong>Last name:</strong> {user.lname || "-"}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Education:</strong> {user.educationLevel || "-"}</p>
            <p><strong>Birth date:</strong> {user.birthDate ? new Date(user.birthDate).toLocaleDateString() : "-"}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Interests:</strong>{" "}
              {user.interests?.length > 0 ? user.interests.join(", ") : "No interests yet"}
            </p>
            <p><strong>Account created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        )}

        <div className="my-courses-section">
          <h2>My Enrolled Courses 📚</h2>
          {loadingCourses && <p>Loading courses...</p>}
          {errorCourses && <p style={{ color: "red" }}>{errorCourses}</p>}

          {!loadingCourses && !errorCourses && courses.length === 0 && (
            <p>You haven't enrolled in any courses yet. <Link to="/courses">Browse courses</Link></p>
            )}
          
          {!loadingCourses && !errorCourses && courses.length > 0 && (
            <div className="courses-grid">
              {courses.map((enrollment) => (
                <Link 
                  to={`/course/${enrollment.course.id}`} 
                  key={enrollment.id} 
                  className="course-card"
                  style={{ textDecoration: 'none', color: 'inherit' }} // 💡 ป้องกัน Link เปลี่ยนสีข้อความและขีดเส้นใต้
                >

              <div key={enrollment.id} className="course-card">
                <img 
                  src={enrollment.course.thumbnailUrl || "https://res.cloudinary.com/dygjtp2be/image/upload/v1774030276/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E_cga0pm.jpg"} 
                  alt={enrollment.course.courseName} 
                  className="img-profile-course"
                  onError={(e) => {
                    e.target.src = "https://res.cloudinary.com/dygjtp2be/image/upload/v1774030276/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E_cga0pm.jpg";
                  }}
                  />
                <h3>{enrollment.course.courseName}</h3>
                <p>
                  Status: 
                  
                  <span className="status-badge">
                    {enrollment.status}
                  </span>
                </p>
              </div>
              </Link>
            ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile