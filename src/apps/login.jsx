import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    if (username === "sajan" && password === "Test@123") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        value={username}
        onChange={handleUsernameChange}
        type="text"
        className="border"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={handlePasswordChange}
        type="password"
        className="border"
        placeholder="Password"
      />
      <button onClick={login}>Login</button>
    </div>
  );
}
export default Login;
