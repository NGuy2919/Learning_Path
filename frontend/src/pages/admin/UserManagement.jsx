import { useEffect, useState } from "react"
import { getUsers, deleteUser } from "../../api/adminApi"

function UserManagement() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    getUsers().then(res => {
      setUsers(res.data)
    })

  }, [])

  const handleDelete = async (id) => {

    await deleteUser(id)

    setUsers(users.filter(u => u.id !== id))

  }

  return (

    <div>

      <h2>User Management</h2>

      {users.map(user => (
        <div key={user.id}>

          {user.email}

          <button onClick={() => handleDelete(user.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>

  )

}

export default UserManagement