import prisma from "../lib/prisma.js"

export const getCourses = async (req, res) => {
  try {

    const courses = await prisma.course.findMany({
      include: {
        lessons: true
      }
    })

    res.json(courses)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}