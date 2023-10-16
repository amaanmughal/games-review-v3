import greenArrow from "../assets/Green-Up-Arrow.png";
import redArrow from "../assets/RedDownArrow.png";

export const VoteHandler = ({
  votes,
  voteClicked,
  setVoteUpdate,
  setVoteClicked,
}) => {
  const voteIncrease = () => {
    if (voteClicked === false) {
      setVoteUpdate(1);
      setVoteClicked(true);
    }
  };

  const voteDecrease = () => {
    if (voteClicked === false) {
      setVoteUpdate(-1);
      setVoteClicked(true);
    }
  };

  return (
    <div className="review-votes-container">
      <button onClick={voteIncrease}>
        <img className="review-votes-arrow" src={greenArrow} />
      </button>
      <p className="review-votes-up-text" id="review-votes-text">
        {votes}
      </p>
      <button onClick={voteDecrease}>
        <img className="review-votes-arrow" src={redArrow} />
      </button>
    </div>
  );
};

export default VoteHandler;
