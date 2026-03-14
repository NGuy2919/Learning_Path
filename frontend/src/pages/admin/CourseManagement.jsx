import { useEffect, useState } from "react"
import { getCourses, deleteCourse } from "../../api/adminApi"

function CourseManagement() {

  const [courses, setCourses] = useState([])

  useEffect(() => {

    getCourses().then(res => {
      setCourses(res.data)
    })

  }, [])

  const handleDelete = async (id) => {

    await deleteCourse(id)

    setCourses(courses.filter(c => c.id !== id))

  }

  return (

    <div>

      <h1>Course Management</h1>

      {courses.map(course => (

        <div key={course.id}>

          {course.title}

          <button onClick={() => handleDelete(course.id)}>
            Delete
          </button>

        </div>

      ))}

    </div>

  )

}

export default CourseManagement