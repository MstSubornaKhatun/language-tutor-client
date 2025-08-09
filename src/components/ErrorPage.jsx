import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 dark:bg-black flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-9xl font-extrabold text-primary mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-4xl font-semibold mb-2 text-neutral-content">
        Oops! Page Not Found
      </h2>
      <p className="max-w-md mb-8 text-neutral">
        Sorry, the page you are looking for doesn’t exist or has been moved.
        Please check the URL or return to the homepage.
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary btn-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-focus"
        aria-label="Go to Home"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;