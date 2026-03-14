import { Link } from "react-router-dom"

function Dashboard() {

  return (
    <div>

      <h1>Admin Dashboard</h1>

      <Link to="/admin/users">Manage Users</Link>
      <br />

      <Link to="/admin/courses">Manage Courses</Link>

    </div>
  )

}

export default Dashboard