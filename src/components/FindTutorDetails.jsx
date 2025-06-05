import React from "react";
import Swal from "sweetalert2";

const FindTutorDetails = () => {
  // Static demo data
  const tutor = {
    image: "https://i.ibb.co/Kz2Hbt1k/Screenshot-2025-05-24-194353.png",
    name: "Sarah Johnson",
    language: "English",
    description:
      "Experienced English tutor with a passion for helping students succeed. Specializes in grammar, pronunciation, and business English.",
    price: "$25/hour",
    review: 18,
  };

  const handleBook = () => {
    // SweetAlert for Success
Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-base-100 shadow-lg rounded-lg">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Image */}
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{tutor.name}</h2>
          <p className="text-sm font-medium mb-1 text-gray-500">
            Language: <span className="text-base-content">{tutor.language}</span>
          </p>
          <p className="text-sm font-medium mb-1 text-gray-500">
            Price: <span className="text-base-content">{tutor.price}</span>
          </p>
          <p className="text-sm font-medium mb-3 text-gray-500">
            Total Reviews:{" "}
            <span className="text-base-content font-semibold">
              {tutor.review}
            </span>
          </p>
          <p className="text-sm mb-4 text-base-content">
            {tutor.description}
          </p>

          {/* Book Button */}
          <button onClick={handleBook} className="btn btn-primary w-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindTutorDetails;