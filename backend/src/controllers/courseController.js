import prisma from "../lib/prisma.js"

export const getAllCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        modules: true,
        keywords: true,
        embedding: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    res.json({
      success: true,
      count: courses.length,
      data: courses
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching courses"
    });
  }
};