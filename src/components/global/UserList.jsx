import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [selectedRoles, setSelectedRoles] = useState({});

<<<<<<< HEAD
=======
  // Fetch users from API
>>>>>>> 22eeded14a52fadc998509d10f58b7931440ecf9
  useEffect(() => {
    axios.get("http://localhost:9090/admin/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => {
        setError("Error fetching users");
        console.log(err);
      });
  }, []);

<<<<<<< HEAD
=======
  // Update role for a user
>>>>>>> 22eeded14a52fadc998509d10f58b7931440ecf9
  const updateUserRole = (id, newRole) => {
    axios.put(`http://localhost:9090/admin/users/${id}/role`, { role: newRole })
      .then(response => {
        setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
        alert("Role updated successfully!");
      })
      .catch(err => {
        setError("Error updating role");
        console.log(err);
      });
  };

  const handleRoleChange = (id, e) => {
    const newRole = e.target.value;
    setSelectedRoles({ ...selectedRoles, [id]: newRole });
  };

  const handleUpdateClick = (id) => {
    const newRole = selectedRoles[id] || users.find(user => user.id === id).role;
    updateUserRole(id, newRole);
  };

  return (
    <div>
      <h2>User List</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                <select
<<<<<<< HEAD
                  value={selectedRoles[user.id] || user.role} 
=======
                  value={selectedRoles[user.id] || user.role} // Set the selected role from state or user role
>>>>>>> 22eeded14a52fadc998509d10f58b7931440ecf9
                  onChange={(e) => handleRoleChange(user.id, e)}
                >
                  <option value="ROLE_USER">ROLE_USER</option>
                  <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleUpdateClick(user.id)}>
                  Update Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
