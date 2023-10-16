import { fetchSingleReview, updateReviewVotes } from "../apis/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dice from "../assets/icons8-dice-60.png";
import CommentSection from "./CommentSection";
import TimeConverter from "./TimeConverter";
import CreateComment from "./CreateComment";
import VoteHandler from "./VoteHandler";

const SingleGame = ({ user, loggedIn }) => {
  const { review_id } = useParams();

  const [review, setReview] = useState([]);
  const [voteUpdate, setVoteUpdate] = useState(0);
  const [votes, setVotes] = useState(review.votes);
  const [voteClicked, setVoteClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSingleReview(review_id).then(({ review }) => {
      setVotes(review.votes);
      setReview(review);
      setLoading(false);
    });
  }, [review]);

  useEffect(() => {
    updateReviewVotes(review_id, voteUpdate);
  }, [voteUpdate]);

  if (loading)
    return (
      <main className="main-loading">
        <p className="loading-text">Loading</p>
        <img className="dice-loading" src={dice} />
      </main>
    );

  return (
    <main className="main-general">
      <h1 className="title-single-review">{review.title}</h1>
      <img className="img-single-review" src={review.review_img_url} />
      <div className="content-single-review">
        <h4 className="content-label-single-review">Creator:</h4>
        <p>{review.designer}</p>
        <h4 className="content-label-single-review">Category:</h4>
        <p>{review.category}</p>
        <h4 className="content-label-single-review">Review:</h4>
        <p>{review.review_body}</p>
        <h4 className="content-label-single-review">Created:</h4>
        <p>{TimeConverter(review.created_at)}</p>
        <h4 className="content-label-single-review">Votes:</h4>
        <VoteHandler
          votes={votes}
          review_id={review_id}
          voteUpdate={voteUpdate}
          voteClicked={voteClicked}
          setVoteUpdate={setVoteUpdate}
          setVoteClicked={setVoteClicked}
        />
      </div>
      <CommentSection user={user} />
      <div className="comment-section-gap"></div>
      <CreateComment user={user} loggedIn={loggedIn} review_id={review_id} />
    </main>
  );
};

export default SingleGame;
