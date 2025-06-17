import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Register = () => {
  const {createUser} = use(AuthContext);
  const location =useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';




  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, photo, password);

    // create user
    createUser(email, password)
    .then (result => {
      console.log(result.user);
      navigate(from);
    })
    .catch(error => {
      console.log(error);
    })
  };
  return (
 <div className="flex justify-center min-h-screen items-center bg-blue-200">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl py-5 bg-blue-50">
        <h2 className="font-semibold text-2xl text-center text-blue-600">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* Email */}
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
            <label className="input validator">
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                minLength="6"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <button
              type="submit"
              className="btn bg-blue-600 text-white hover:bg-blue-700 mt-4"
            >
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-blue-500" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
