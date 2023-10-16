import { useState, useEffect } from "react";
import { fetchUsers, addUser } from "../apis/api";
import dice from "../assets/icons8-dice-60.png";

export const UserPage = ({ user, setUser, setLoggedIn, loggedIn }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usernameTaken, setUsernameTaken] = useState(false);

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, [users]);

  const signInLink = () => {
    const loginForm = document.querySelector("#login");
    const createForm = document.querySelector("#sign-up");

    loginForm?.classList.remove("hidden");
    createForm?.classList.add("hidden");
  };

  const signInHandler = () => {
    const username = document.querySelector("#login-username");
    const name = document.querySelector("#login-name");
    const errorMessage = document.querySelector("#incorrect-username-or-name");

    users.map((user) => {
      if (username?.value === user?.username && name?.value === user?.name) {
        setUser(user);
        setLoggedIn(true);
      } else {
        errorMessage?.classList.remove("hidden");
      }
    });
  };

  const logoutHandler = () => {
    setUser([]);
    setLoggedIn(false);
  };

  const createAccountLink = () => {
    const loginForm = document.querySelector("#login");
    const createForm = document.querySelector("#sign-up");

    loginForm?.classList.add("hidden");
    createForm?.classList.remove("hidden");
  };

  const signUpHandler = () => {
    let i = 1;

    const avatarUrl = document.querySelector("#sign-up-profile-pic-url");
    const username = document.querySelector("#sign-up-username");
    const name = document.querySelector("#sign-up-name");
    const errorMessage = document.querySelector("#username-taken");
    const createdMessage = document.querySelector("#account-created");

    users.map((user) => {
      if (user?.username === username?.value) {
        setUsernameTaken(true);
        return errorMessage?.classList.remove("hidden");
      } else if (users.length === i) {
        addUser(username?.value, name?.value, avatarUrl?.value);
        return createdMessage?.classList.remove("");
      }
      i++;
    });
  };

  if (isLoading)
    return (
      <main className="main-loading">
        <p className="loading-text">Loading</p>
        <img className="dice-loading" src={dice} />
      </main>
    );
  else if (loggedIn === false)
    return (
      <main className="main-login">
        <div className="form-container">
          {/*----- Login Page -----*/}

          <form id="login">
            <h1 className="form-title">Login</h1>

            <div className="form-input-username">
              <input
                type="text"
                className="form-input"
                id="login-username"
                placeholder="* Username"
                autoFocus
                required
              ></input>
            </div>
            <div className="form-input-name">
              <input
                type="text"
                className="form-input"
                id="login-name"
                placeholder="* Full name"
                required
              ></input>
            </div>
            <button
              onClick={signInHandler}
              className="form-button"
              type="submit"
            >
              Continue
            </button>
            <div
              id="incorrect-username-or-name"
              className="hidden form-message-error"
            >
              Incorrect username/name
            </div>
            <p className="form-text">
              <a
                onClick={signInLink}
                className="form-link"
                id="loginLink"
                href="#"
              >
                Have an account? Login
              </a>
            </p>
            <p className="form-text">
              <a
                onClick={createAccountLink}
                className="form-link"
                id="createLink"
                href="#"
              >
                Don't have an account? Create account
              </a>
            </p>
          </form>
          {/*----- Sign Up Page -----*/}

          <form className="hidden" id="sign-up">
            <h1 className="form-title">Create Account</h1>
            <div className="form-input-username">
              <input
                type="text"
                id="sign-up-profile-pic-url"
                className="form-input"
                placeholder="profile image url"
              ></input>
            </div>
            <div className="form-input-username">
              <input
                type="text"
                id="sign-up-username"
                className="form-input"
                placeholder="* Username"
                autoFocus
                required
              ></input>
            </div>
            <div id="username-taken" className="hidden form-message-error">
              Username is taken
            </div>
            <div className="form-input-name">
              <input
                type="text"
                id="sign-up-name"
                className="form-input"
                placeholder="* Full name"
                required
              ></input>
            </div>
            <div id="account-created" className="hidden form-message-created">
              Account has been created
            </div>
            <button
              onClick={signUpHandler}
              className="form-button"
              type="submit"
            >
              Continue
            </button>
            <p className="form-text">
              <a
                onClick={signInLink}
                className="form-link"
                id="loginLink"
                href="#"
              >
                Have an account? Login
              </a>
            </p>
            <p className="form-text">
              <a
                onClick={createAccountLink}
                className="form-link"
                id="createLink"
                href="#"
              >
                Don't have an account? Create account
              </a>
            </p>
          </form>
        </div>
      </main>
    );

  return (
    <main className="current-user-page">
      {/*----- Current User Page -----*/}
      <h1 className="current-user-heading">Current User:</h1>
      <div className="current-user-container">
        <img src={user.avatar_url} />
        <h2>{user.username}</h2>
        <h2>{user.name}</h2>
        <button onClick={logoutHandler}>Log out</button>
      </div>
    </main>
  );
};

export default UserPage;
