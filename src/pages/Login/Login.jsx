import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogin from '../../Shared/SocialLogin';

const Login = () => {
  const {signInUser} =use(AuthContext);
  const location =useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';


      const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // create user
    signInUser(email, password)
    .then (result => {
      console.log(result.user);
      navigate(from);
    })
    .catch(error => {
      console.log(error);
    })
  };
    return (
     <div className="flex justify-center min-h-screen items-center  bg-blue-200">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl py-5 bg-blue-50">
        <h2 className="font-semibold text-2xl text-center mb-5 mt-5 text-blue-600">
          Login your account
        </h2>
      
        {/* Google */}
        <SocialLogin  from={from}></SocialLogin>
   

          <div className="divider pl-10 pr-10">OR</div>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <Link
                to="/auth/forgot-password"
                className="text-blue-600 underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}

            <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-blue-500" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Login;