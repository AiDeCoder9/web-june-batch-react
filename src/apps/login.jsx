import { useFormik } from "formik";
import { object, string } from "yup";

//validation

//yup alternative zod
//formik alternative react-hook-form

const loginValidation = object({
  username: string("Username must be string")
    .min(3, "Username must be 3 character")
    .max(10)
    .required("Username is required"),
  password: string("Password must be string")
    .min(6, "Minimum length is 6")
    .required("Password is required"),
});

function Login() {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      if (values.username === "sajan" && values.password === "Test@123") {
        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        value={values.username}
        onChange={handleChange}
        type="text"
        className="border"
        placeholder="Username"
        name="username"
      />
      <p className="text-red-400">{errors.username}</p>
      <input
        value={values.password}
        onChange={handleChange}
        type="password"
        className="border"
        placeholder="Password"
        minLength={6}
        required
        name="password"
      />
      <p className="text-red-400">{errors.password}</p>
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
