import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const LanguageFindTutors = () => {
  const { language } = useParams();
  const [tutors, setTutors] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://language-tutor-server.vercel.app/tutors-by-language?language=${language}`)
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, [language]);

  const handleBook = (tutor) => {
    const bookingData = {
      tutorId: tutor._id,
      name: tutor.name,
      photo: tutor.photo,
      language: tutor.language,
      price: tutor.price,
      userEmail: user?.email,
      reviewGiven: false,
    };

    fetch("https://language-tutor-server.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire("Success!", "Tutor booked successfully.", "success");
        } else if (data.message === "already booked") {
          Swal.fire("Oops!", "You have already booked this tutor.", "warning");
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire("Error!", "Failed to book tutor.", "error");
      });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 capitalize text-gray-800 dark:text-white">
        Tutors for {language}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {tutors.map(tutor => (
          <div
            key={tutor._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center gap-4 transition-all"
          >
            <img
              src={tutor.photo}
              alt={tutor.name}
              className="h-48 w-48 object-cover rounded shadow"
            />
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {tutor.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Language: {tutor.language}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Price: ${tutor.price}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tutor.description}
              </p>
            </div>
            <button
              onClick={() => handleBook(tutor)}
              className="btn btn-primary mt-4 md:mt-0"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageFindTutors;