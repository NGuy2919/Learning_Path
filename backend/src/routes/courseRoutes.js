import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { getAllCourses, getCourseById, getCoursesWithRating } from "../controllers/courseController.js"

const router = express.Router()

router.get("/", verifyToken, getAllCourses);
router.get("/popular", verifyToken, getCoursesWithRating)
router.get("/:id", verifyToken, getCourseById);

export default router



