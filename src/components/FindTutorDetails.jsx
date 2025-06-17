import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const FindTutorDetails = () => {
  const { _id, name, photo, description, price, language } = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBook = () => {
    const bookingData = {
      tutorId: _id,
      name,
      photo,
      language,
      price,
      userEmail: user.email,
      reviewGiven: false,
    };

















    const token = localStorage.getItem("access-token");


    // Step 1: Check if already booked
    fetch(`https://language-tutor-server.vercel.app/bookings?email=${user.email}&tutorId=${_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((existingBookings) => {
        if (existingBookings.length > 0) {
          Swal.fire("You already booked this tutor!", "", "warning");
        } else {
          // Step 2: Book now
   fetch("https://language-tutor-server.vercel.app/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization:` Bearer ${token}`, // 👈 Token পাঠানো হচ্ছে
  },
  body: JSON.stringify(bookingData),
})
  .then((res) => {
    if (res.status === 401) {
      Swal.fire("Failed to book. Please login again.", "", "error");
      return;
    }
    return res.json();
  })
  .then((data) => {
    if (data?.insertedId) {
      Swal.fire("Booked successfully!", "", "success");
      navigate("/my-booking-tutors");
    }
  })
            .catch(() => {
              Swal.fire("Failed to book. Please login again.", "", "error");
            });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-base-100 shadow-lg rounded-lg">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <img src={photo} alt={name} className="w-full h-64 object-cover rounded-lg" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-sm">Language: {language}</p>
          <p className="text-sm">Price: ${price}</p>
          <p className="text-sm mb-4">{description}</p>
          <button onClick={handleBook} className="btn btn-primary w-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindTutorDetails;