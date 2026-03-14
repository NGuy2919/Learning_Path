import express from "express"
import { verifyToken, verifyAdmin } from "../middleware/auth.js"
import {
  getDashboard,
  getAllUsers,
  updateUserRole,
  deleteUser
} from "../controllers/admin.controller.js"

const router = express.Router()

router.get("/dashboard", verifyToken, verifyAdmin, getDashboard)

router.get("/users", verifyToken, verifyAdmin, getAllUsers)

router.put("/users/:id/role", verifyToken, verifyAdmin, updateUserRole)

router.delete("/users/:id", verifyToken, verifyAdmin, deleteUser)

export default router