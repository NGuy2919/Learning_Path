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

export const getCourseById = async (req, res) => {
  try {

    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: {
        id: id
      },
      include: {
        modules: true,
        keywords: true,
        embedding: true
      }
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.json({
      success: true,
      data: course
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching course"
    });
  }
};
