import express from "express"
import courseRoutes from "./routes/courses.routes.js"
import adminRoutes from "./routes/admin.routes.js"

const app = express()

app.use(express.json())

app.use("/api/courses", courseRoutes)

app.use("/api/admin", adminRoutes)

app.listen(3000, () => {
  console.log("Server running")
})