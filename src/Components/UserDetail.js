import React, { useState, useEffect } from "react";
import { Fragment } from "react";

import "../Styles/UserDetail.css";

/**
 * renders a user based on the url param id
 * @param {string} props
 */
const UserDetail = props => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const { id } = props.match.params;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => setUser(json))
      .then(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
          .then(response => response.json())
          .then(json => setPosts(json));
      });
  }, []);

  return (
    <Fragment>
      {user && (
        <Fragment>
          <div className="mainHeader">{user.name.toUpperCase()}</div>

          <div className="userInfo">
            <div className="subheader">User Info</div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.username}</div>
          </div>

          <div className="phoneAddressRow">
            <div className="address">
              <div className="subheader">User address:</div>
              <div>{user.address.street}</div>
              {user.address.suit && <div>{user.address.suite}</div>}
              <div>{user.address.city}</div>
            </div>

            <div className="phone">
              <div className="subheader">User Phone:</div>
              <div>{user.phone}</div>
            </div>
          </div>

          <div className="mainHeader">USER POSTS</div>
          <div className="posts">
            {posts &&
              posts.map(post => (
                <div>
                  <div className="titleSection">
                    <div className="subheader postTitle">Post Title</div>
                    <div>{post.title}</div>
                  </div>
                  <div>{post.body}</div>
                  {/* TODO: add delete functionality */}
                  <button>DELETE</button>
                </div>
              ))}
          </div>

          <div className="mainHeader">ADD POSTS</div>
          {/* TODO: add "ADD POSTS" section */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserDetail;
