import React, { Suspense } from "react";
import Loading from "../../components/Loading";
import BookingLists from "./BookingList";
import useAuth from "../../hooks/useAuth";
import useBookingsApi from "../../api/useBookingsApi";

const MyBooking = () => {
  const { user } = useAuth();
  const {bookingsCreatedByPromise} = useBookingsApi();


  return (
    <Suspense fallback={<Loading />}>
      <BookingLists
        bookingsCreatedByPromise={bookingsCreatedByPromise(
          user.email
        )}
      />
    </Suspense>
  );
};

export default MyBooking;