import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImEye, ImEyeBlocked } from "react-icons/im"

function Login({ setUser }) {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  // function toggleShowPassword() {
  //   const password = document.querySelector("#password");
  //   const type =
  //     password.getAttribute("type") === "password" ? "text" : "password";
  //   password.setAttribute("type", type);
  // }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((user) => setUser(user))
          .then(loginAlert);
      }
    });
  }

  function loginAlert() {
    alert("you have logged in successfully");
  }

  return (
    <div>
      <div className="login-container">
      <h1 className="centered-header">Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={username}
            className="login-form"
            id="username"
            placeholder="username"
            autoComplete="off"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            value={password}
            minLength="5"
            className="login-form"
            id="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" className="login-form login-submit-button">Submit</button>
        </form>
      </div>
      <div className="login-signup-field">
        <p>Not registered? </p>
        <NavLink to="/Signup" exact className="signup-route-button">
          Create an account
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
