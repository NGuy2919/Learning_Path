export async function getCourses() {
  const res = await fetch("http://localhost:3000/api/courses")
  return res.json()
}

export async function getCourseById(id) {
  const res = await fetch(`http://localhost:3000/api/courses/${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch course");
  }
  return res.json()
}