import Dashboard from "../pages/admin/Dashboard"
import UserManagement from "../pages/admin/UserManagement"
import CourseManagement from "../pages/admin/CourseManagement"
import AdminRoute from "../components/AdminRoute"

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <UserManagement />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/courses"
        element={
          <AdminRoute>
            <CourseManagement />
          </AdminRoute>
        }
      />

    </Routes>

  )

}

export default AppRoutes