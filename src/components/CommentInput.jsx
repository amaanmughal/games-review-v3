export const CommentInput = ({ setCommentBody }) => {
  return (
    <input
      type="text"
      placeholder="Add your comment"
      id="comment-body"
      onChange={(e) => setCommentBody(e.target.value)}
    ></input>
  );
};

export default CommentInput;
