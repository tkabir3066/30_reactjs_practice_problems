import React, { useState } from "react";

// Question: Implement a basic authentication form with login and registration
function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if (isRegistered) {
      //login

      if (isRegistered) {
        const user = users.find(
          (user) => user?.email === email && user?.password === password
        );
        if (user) {
          setIsLoggedIn(true);
        } else {
          alert("Login failed, please check your credential");
        }
      }
    } else {
      //register
      const newUser = { email, password };
      setUsers([...users, newUser]);

      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {email}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>{isRegistered ? "Login" : "Register"}</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleAuthentication}>
                {isRegistered ? "Login" : "Register"}
              </button>
            </form>

            <p>
              {isRegistered
                ? "Don't have an account? Register Now"
                : "Already have an account? Login!"}
            </p>

            <button onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Register" : "Login"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Thirteen;
