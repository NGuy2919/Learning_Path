import { useEffect, useState } from "react"
import { getStats } from "../../api/adminApi"

function Dashboard() {

  const [stats, setStats] = useState(null)

  useEffect(() => {

    getStats().then(res => {
      setStats(res.data)
    })

  }, [])

  if (!stats) return <div>Loading...</div>

  return (
    <div>

      <h1>Admin Dashboard</h1>

      <div>
        <h3>Total Users</h3>
        <p>{stats.users}</p>
      </div>

      <div>
        <h3>Total Courses</h3>
        <p>{stats.courses}</p>
      </div>

      <div>
        <h3>Total Enrollments</h3>
        <p>{stats.enrollments}</p>
      </div>

    </div>
  )

}

export default Dashboard