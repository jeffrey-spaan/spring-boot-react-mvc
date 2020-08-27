import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'; // Import Axios in order to use Axios functionality and GET data from the back-end

// React App Component
export default function App() {
  // React hooks state management
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Create function to load users
  const getAllUsers = async () => {
    try { // Try to execute
      const response = await axios.get("http://localhost:8080/api/users"); // Get all users via controller GET all HTTP api/users
      setUsers(response.data); // Set state users
    } catch (error) { // Otherwise catch the error
      setError(error); // Set the error
    }
  }

  useEffect(() => { // useEffect loads function(s) with first render OR re-render
    getAllUsers();
  }, [])

  return (
      <div className="App">
        <header className="App-header">
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
              {
                users.map((user) => ( // Map each user to the table rows
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                    </tr>
                ))
              }
            </tbody>
          </table>
        </header>
      </div>
  );
}
