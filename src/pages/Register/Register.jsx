import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="card w-full max-w-md shadow-lg rounded-lg bg-white dark:bg-gray-800 p-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="space-y-6">
          <fieldset className="space-y-4">
            {/* Name */}
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              className="input input-bordered w-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Photo URL */}
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              placeholder="Photo URL"
              required
              className="input input-bordered w-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Email */}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input input-bordered w-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Password */}
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Password"
              minLength={6}
              pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              className="input input-bordered w-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Password validation hint (optional) */}
            {/* <p className="text-xs text-gray-500 dark:text-gray-400">
              Must be more than 8 characters, including number, lowercase and uppercase letters
            </p> */}
          </fieldset>

          <button
            type="submit"
            className="btn w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Register
          </button>

          <p className="text-center text-gray-700 dark:text-gray-300 mt-6">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-600 hover:underline dark:text-blue-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;