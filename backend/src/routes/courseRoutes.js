import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { getAllCourses, getCourseById } from "../controllers/courseController.js"

const router = express.Router()

router.get("/courses", verifyToken, getAllCourses);
router.get("/courses/:id", verifyToken, getCourseById);

export default router