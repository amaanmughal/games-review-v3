import userIcon from "../assets/default-icon.png";
import TimeConverter from "./TimeConverter";
import { fetchUsers, deleteComment } from "../apis/api";
import { useState, useEffect } from "react";

export const SingleComment = ({ comment, user }) => {
  const [users, setUsers] = useState([]);

  let i = 0;

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  const deleteTheComment = () => {
    deleteComment(comment.comment_id);
  };

  return (
    <li>
      <div>
        {users.map((user) => {
          if (user.username === comment.author) {
            return <img src={user.avatar_url} />;
          } else if (i === users.length) {
            return <img src={userIcon} />;
          }
          i++;
        })}
      </div>
      <div className="comment-content">
        <div className="author-and-creation-date">
          <p className="comment-author">{comment.author}</p>
          <p>{TimeConverter(comment.created_at)}</p>
        </div>
        <p className="comment-body">{comment.body}</p>
      </div>
      {user.username === comment.author ? (
        <button onClick={deleteTheComment}>Delete</button>
      ) : null}
    </li>
  );
};

export default SingleComment;
