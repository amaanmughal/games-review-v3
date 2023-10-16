import { fetchReviewComments } from "../apis/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleComment from "./SingleComment";

export const CommentSection = ({ user }) => {
  const { review_id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchReviewComments(review_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [comments]);

  return (
    <div className="comment-section-single-page">
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => {
          return (
            <SingleComment
              key={comment.comment_id}
              comment={comment}
              user={user}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentSection;
