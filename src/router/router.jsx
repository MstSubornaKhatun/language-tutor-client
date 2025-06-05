import {
  createBrowserRouter
} from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FindTutorDetails from "../components/FindTutorDetails";
import FindTutorCard from "../components/FindTutorCard";
import AddTutorials from "../pages/AddTutorials/AddTutorials";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
         {
            index: true, 
            Component:  Home
        },
         {
            path: "/find-tutor-details", 
            Component:  FindTutorDetails
        },
         {
            path: "/find-tutors", 
            Component:  FindTutorCard
        },
         {
            path: "/add-tutorials", 
            Component:  AddTutorials
        },
    ]
  },
    {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
        errorElement: (
          <p className="text-red-500 text-center mt-10">
            Sorry, something went wrong during login. Please try again.
          </p>
        ),
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
        errorElement: (
          <p className="text-red-500 text-center mt-10">
            Sorry, something went wrong during registration. Please try again.
          </p>
        ),
      },
    //   {
    //     path: "/auth/forgot-password",
    //     element: <ForgotPassword />,
    //   },
    ],
  },
  
]);

export default router;