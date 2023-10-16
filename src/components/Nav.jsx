import dice from "../assets/icons8-dice-60.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={dice} />
        </Link>
        <h1 className="nav-website-title">The Game Spot</h1>
      </div>

      <div className="nav-links-container">
        <Link to="/users">
          <button className="nav-link-button">User</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
