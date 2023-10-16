import { useState, useEffect } from "react";
import fetchReviews from "../apis/api";
import FilterList from "./FilterList";
import { Link } from "react-router-dom";
import dice from "../assets/icons8-dice-60.png";

const GamesList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchReviews(category, sort, order).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category, sort, order]);

  if (isLoading)
    return (
      <main className="main-loading">
        <p className="loading-text">Loading</p>
        <img className="dice-loading" src={dice} />
      </main>
    );

  return (
    <main className="main-general">
      <div className="logo-main-page-container">
        <div className="logo-main-page">
          <h1 className="logo-heading">The Game Spot</h1>
          <h3 className="logo-sub-heading">
            <span className="number-one-spot-text">#1 spot</span> for board game
            reviews
          </h3>
          <FilterList
            setCategory={setCategory}
            setSort={setSort}
            setOrder={setOrder}
          />
        </div>
      </div>

      <div className="reviews-list-main-page-container">
        <ul>
          {reviews.map((review) => {
            let endpoint = `/reviews/${review.review_id}`;
            return (
              <Link to={endpoint}>
                <li className="review-game-main-page" key={review.review_id}>
                  <img src={review.review_img_url} />
                  <p className="review-title-main-page">
                    Title: {review.title}
                  </p>
                  <p className="review-sub-main-page">
                    Creator: {review.designer}
                  </p>
                  <p className="review-sub-main-page">
                    Category: {review.category}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default GamesList;
