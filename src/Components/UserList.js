import React, { useState, useEffect } from "react";
import { Fragment } from "react";

/**
 * renders a list of users
 */
const UserList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  return (
    <Fragment>
      <table>
        <tr>
          <th>ID</th>
          <th>EMAIL</th>
        </tr>
        {users &&
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </table>
    </Fragment>
  );
};

export default UserList;
