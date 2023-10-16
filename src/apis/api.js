import axios from "axios";

export const fetchReviews = async (category, sort, order) => {
  try {
    const res = await axios.get(
      `https://nc-games-project-amaan.onrender.com/api/reviews?category=${category}&sort_by=${sort}&order=${order}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleReview = async (review_id) => {
  try {
    const res = await axios.get(
      `https://nc-games-project-amaan.onrender.com/api/reviews/${review_id}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateReviewVotes = async (review_id, voteNum) => {
  try {
    await axios.patch(
      `https://nc-games-project-amaan.onrender.com/api/reviews/${review_id}`,
      { inc_votes: voteNum }
    );
  } catch (err) {
    console.log(err);
  }
};

export const fetchReviewComments = async (review_id) => {
  try {
    const res = await axios.get(
      `https://nc-games-project-amaan.onrender.com/api/reviews/${review_id}/comments`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (id) => {
  try {
    await axios.delete(
      `https://nc-games-project-amaan.onrender.com/api/comments/${id}`
    );
  } catch (err) {
    console.log(err);
  }
};

export const addReviewComment = async (review_id, author, body) => {
  try {
    await axios.post(
      `https://nc-games-project-amaan.onrender.com/api/reviews/${review_id}/comments`,
      { username: author, body: body }
    );
  } catch (err) {
    console.log(err);
  }
};

export const fetchUsers = async () => {
  try {
    const res = await axios.get(
      `https://nc-games-project-amaan.onrender.com/api/users`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (username, name, avatar_url) => {
  try {
    await axios.post(`https://nc-games-project-amaan.onrender.com/api/users`, {
      username: username,
      name: name,
      avatar_url: avatar_url,
    });
  } catch (err) {
    console.log(err);
  }
};

export default fetchReviews;
