import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Login = () => {
  const {signInUser} =use(AuthContext);
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
    })
    .catch(error => {
      console.log(error);
    })
  };
    return (
     <div className="flex justify-center min-h-screen items-center  bg-green-200 w-11/12 mx-auto rounded-lg">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl py-5 bg-green-50">
        <h2 className="font-semibold text-2xl text-center mb-5 mt-5 text-green-600">
          Login your account
        </h2>
        {/* <div className="text-center">  */}
        {/* Google */}
        {/* <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button> */}
        {/* </div> */}

        <p className=" text-xl text-center">or</p>

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

            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white mt-4">
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