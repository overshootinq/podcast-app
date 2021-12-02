import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im"

function Signup({ setUser }) {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [password_confirmation, setPasswordConfirmation] = useState([]);

  function toggleShowPassword() {
    const password = document.querySelector("#password");
    const type =
    password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  }

//   function toggleShowPassword() {
//     const password = document.querySelector("#password_confirmation");
//     const type =
//     password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);
//   }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, password_confirmation }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <div className="signup-container">
      <h1 className="centered-header">Sign Up</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="signup-form"
            id="username"
            placeholder="username"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ display: 'block' }}
          />
          <input
            type="password"
            className="signup-form"
            value={password}
            minLength="5"
            maxLength="15"
            id="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            style={{ display: 'block' }}
            required
          />
          <input
            type="password"
            className="signup-form"
            value={password_confirmation}
            minLength="5"
            maxLength="15"
            id="password_confirmation"
            placeholder="confirm password"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            style={{ display: 'block' }}
            required
          />
          <button type="submit" className="signup-form signup-submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
