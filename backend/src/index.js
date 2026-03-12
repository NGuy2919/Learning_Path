import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import courseRoutes from "./routes/courseRoutes.js"
import recommendationRoutes from "./routes/recommendationRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"

// Load environment variables from .env
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api", courseRoutes)
app.use("/api/recommendations", recommendationRoutes)
app.use("/api/user", userRoutes)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})