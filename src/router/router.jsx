import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FindTutorDetails from "../components/FindTutorDetails";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import FindTutors from "../pages/FindTutors/FindTutors";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import PrivateRoute from "../routes/PrivateRoute";
import AddTutor from "../pages/AddTutor/AddTutor";
import TutorUpdate from "../pages/MyTutorials/TutorUpdate";
import LanguageFindTutors from "../pages/LanguageFindTutors/LanguageFindTutors";
import MyBooking from "../pages/MyBookedTutorial/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/find-tutors",
        loader: () => fetch("https://language-tutor-server.vercel.app/tutors"),
        Component: FindTutors,
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivateRoute>
            <AddTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivateRoute>
            <MyTutorials />
          </PrivateRoute>
        ),
      },

      {
        path: "/language-tutors/:language",
        element: <LanguageFindTutors />,
      },
      {
        path: "/find-tutor/:id",
        loader: ({ params }) =>
          fetch(`https://language-tutor-server.vercel.app/tutors/${params.id}`),
        element: (
          <PrivateRoute>
            <FindTutorDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "my-booking-tutors",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "my-booking-tutors/:id",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "addTutor",
        element: (
          <PrivateRoute>
            <AddTutor></AddTutor>
          </PrivateRoute>
        ),
      },
      {
        path: "tutorUpdate/:id",
        loader: ({ params }) =>
          fetch(`https://language-tutor-server.vercel.app/tutors/${params.id}`),
        element: (
          <PrivateRoute>
            <TutorUpdate></TutorUpdate>
          </PrivateRoute>
        ),
      },
    ],
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
    ],
  },
]);

export default router;
