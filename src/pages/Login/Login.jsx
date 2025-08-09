

import React, { useContext } from 'react';  // useContext হবে use না
import { Link, useLocation, useNavigate } from 'react-router'; // react-router থেকে import হবে react-router-dom থেকে
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogin from '../../Shared/SocialLogin';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="card w-full max-w-md shadow-lg rounded-lg bg-white dark:bg-gray-800 p-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Login to your account
        </h2>

        {/* Social Login */}
        <SocialLogin from={from} />

        <div className="divider text-gray-500 dark:text-gray-400 my-6">OR</div>

        <form onSubmit={handleLogin} className="space-y-6">
          <fieldset className="space-y-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input input-bordered w-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
              required
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="input input-bordered w-full text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
              required
            />
          </fieldset>

          {/* <p className="text-red-500 text-sm">{error}</p> */}

          <button
            type="submit"
            className="btn w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Login
          </button>

          <p className="text-center text-gray-700 dark:text-gray-300 mt-6">
            Don’t have an account?{' '}
            <Link to="/auth/register" className="text-blue-600 hover:underline dark:text-blue-400">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;