import React from "react";
import { Link } from "react-router";

const FindTutorCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto mt-5 mb-5">
      {/* Card 1 */}
      <div className="bg-white  rounded-xl shadow-md hover:shadow-lg transition p-4">
        <img
          src="https://i.ibb.co/Kz2Hbt1k/Screenshot-2025-05-24-194353.png"
          alt="English"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800 ">English</h2>
        <p className="text-gray-600 my-2">
          Fluent English tutor with 5+ years experience in spoken & academic
          English.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-medium text-blue-600 400">$25/hr</span>
          <span className="text-sm text-gray-500 400">18 Reviews</span>
        </div>
        <Link to="find-tutor-details">
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition">
            Details
          </button>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="bg-white  rounded-xl shadow-md hover:shadow-lg transition p-4">
        <img
          src="https://i.ibb.co/Kz2Hbt1k/Screenshot-2025-05-24-194353.png"
          alt="Spanish"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800 ">Spanish</h2>
        <p className="text-gray-600 my-2">
          Native Spanish speaker and certified tutor specializing in beginners.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-medium text-blue-600 400">$20/hr</span>
          <span className="text-sm text-gray-500 400">22 Reviews</span>
        </div>
        <Link to="find-tutor-details">
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition">
            Details
          </button>
        </Link>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
        <img
          src="https://i.ibb.co/Kz2Hbt1k/Screenshot-2025-05-24-194353.png"
          alt="Japanese"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800 ">Japanese</h2>
        <p className="text-gray-600 my-2">
          JLPT N1 passed tutor helping beginners in grammar and conversation.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-medium text-blue-600 400">$30/hr</span>
          <span className="text-sm text-gray-500 400">15 Reviews</span>
        </div>
        <Link to="find-tutor-details">
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindTutorCard;
