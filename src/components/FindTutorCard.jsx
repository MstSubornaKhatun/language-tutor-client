import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FindTutorCard = ({ tutor }) => {
  const { _id, language, name, photo, description, review } = tutor;

  return (
    <div className="w-11/12 mx-auto mt-5 mb-5">
      <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-xl rounded-2xl transition hover:shadow-2xl dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <img
            src={photo}
            alt={name}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Info */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-base-content dark:text-white flex items-center">
              {name}
              {review && (
                <span className="flex items-center ml-2 text-yellow-500">
                  {review} <FaStar className="ml-1" />
                </span>
              )}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Language:</span>{" "}
              <span className="text-base-content dark:text-white">{language}</span>
            </p>

            {review && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Review:</span> {review}
              </p>
            )}

            <p className="text-sm text-base-content dark:text-gray-300">
              {description?.length > 150
                ? `${description.slice(0, 150)}...`
                : description}
            </p>

            <Link to={`/find-tutor/${_id}`} className="btn btn-primary w-full">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutorCard;