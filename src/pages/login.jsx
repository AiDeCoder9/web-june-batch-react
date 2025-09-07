import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    address: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (username === "sajan" && password === "Test@123") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div className="shadow-2xl mx-auto mt-10 p-6 border border-gray-200 rounded-md max-w-80">
      <h1 className="mb-3 text-black text-2xl">Login Page</h1>
      <input
        name="username"
        value={username}
        onChange={handleChange}
        type="text"
        placeholder="Username"
        className="block mb-3 px-4 py-2 border border-gray-400 rounded-md w-full"
      />
      <input
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
        className="block mb-3 px-4 py-2 border border-gray-400 rounded-md w-full"
      />

      <button
        onClick={handleLogin}
        className="block bg-blue-500 px-4 py-2 rounded-md w-full text-white text-center"
      >
        Login
      </button>
    </div>
  );
}
