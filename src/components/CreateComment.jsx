import { addReviewComment } from "../apis/api";
import { useState, useEffect } from "react";
import CommentInput from "./CommentInput";

export const CreateComment = ({ user, loggedIn, review_id }) => {
  const [commentBody, setCommentBody] = useState("");

  useEffect(() => {}, [commentBody]);

  const addComment = () => {
    if (commentBody !== "") {
      addReviewComment(review_id, user.username, commentBody);
    }
  };

  if (loggedIn === true)
    return (
      <div className="create-comment">
        <h4 className="add-comment-heading">Add comment</h4>
        <div className="create-comment-img-and-username">
          <img src={user.avatar_url} />
          <h4>{user.username}</h4>
        </div>
        <div className="add-comment-box">
          <CommentInput setCommentBody={setCommentBody} />
          <button onClick={addComment} id="commentButton">
            Add comment
          </button>
        </div>
      </div>
    );
  else if (loggedIn === false)
    return (
      <div className="create-comment">
        <h4>Please login to add a comment</h4>
      </div>
    );
};

export default CreateComment;
