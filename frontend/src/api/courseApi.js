export async function getCourses() {
  const res = await fetch("http://localhost:3000/api/courses")
  return res.json()
}