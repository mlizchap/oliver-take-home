import React, { useState, useEffect } from "react";
import { Fragment } from "react";

const UserView = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []); // Or [] if effect doesn't need props or state

  return (
    <Fragment>
      {console.log(users)}
      <table>
        <tr>
          <th>ID</th>
          <th>EMAIL</th>
        </tr>
        {users &&
          users.map(user => (
            <tr>
              <th>{user.id}</th>
              <th>{user.email}</th>
            </tr>
          ))}
      </table>
    </Fragment>
  );
};

export default UserView;
