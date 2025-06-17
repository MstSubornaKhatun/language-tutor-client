import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const BookingLists = ({ bookingsCreatedByPromise }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    bookingsCreatedByPromise.then((data) => setBookings(data));
  }, [bookingsCreatedByPromise]);

  const handleReview = async (e, id) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/bookings/review/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewGiven: true, review: 1 }),
      });
      const data = await res.json();

      if (data.modifiedCount > 0) {
        Swal.fire("Review submitted!", "", "success");


        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === id
              ? { ...booking, reviewGiven: true, review: 1 }
              : booking
          )
        );
      }
    } catch (error) {
      console.error("Review error:", error);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  if (!bookings.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
          <img
            src="https://i.ibb.co/YFM7FD7x/Screenshot-2025-06-16-182755.png"
            alt="No Booking"
            className="w-96 h-96 mb-6 rounded-2xl"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            No Booked Found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            You haven’t added any booking yet. Please return to 
              <Link to="/">
            <button className="underline ml-1">
               home page.
            </button>
          </Link>
          </p>
          
        </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="bg-base-100 p-5 shadow-md rounded-xl space-y-2"
        >
          <img
            src={booking.photo}
            alt={booking.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold">{booking.name}</h2>
          <p>Language: {booking.language}</p>
          <p>Price: ${booking.price}</p>
          <p>
            Reviews:{" "}
            <span className="italic text-gray-600">{booking.review || 0}</span>
          </p>
          <button
            type="button"
            onClick={(e) => handleReview(e, booking._id)}
            className="btn btn-secondary w-full"
            disabled={booking.reviewGiven}
          >
            {booking.reviewGiven ? "Reviewed" : "Give Review"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingLists;