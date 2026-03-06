import express from "express"
import { getRecommendedCourses } from "../controllers/recommendationController.js"

const router = express.Router()

router.get("/:userId", getRecommendedCourses)

export default router