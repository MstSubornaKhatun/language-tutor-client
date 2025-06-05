// import React, { useState, useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const ForgotPassword = () => {
//   const { resetPassword } = useContext(AuthContext);
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     resetPassword(email)
//       .then(() => {
//         toast.success("Password reset link sent to your email");
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <form onSubmit={handleSubmit} className="card p-8 bg-base-100 shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center underline mb-6">Forgot Password</h2>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="input input-bordered w-full mb-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn bg-green-600 text-white w-full">
//           Send Reset Link
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;